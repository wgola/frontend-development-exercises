import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SearchForm } from "./searchForm/SearchForm.js";
import { useDispatch, useSelector } from "react-redux";
import { SortForm } from "./sortForm/SortForm.js";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "../../axios.js";
import lodash from "lodash";
import {
  addFetchedEntries,
  getAllPlanEntries,
  getIfAllEntriesFetched,
} from "./planEntriesSlice";
import {
  Tile,
  PlanEntryListElement,
  Loading,
  Header,
  ButtonsDiv,
  Button,
} from "../../components";

const StyledList = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const PlanEntriesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allPlanEntries = useSelector(getAllPlanEntries);
  const ifAllEntriesFetched = useSelector(getIfAllEntriesFetched);

  const [search, setSearch] = useState({
    subject: "",
    day: "",
    difficulty: [0, 0],
  });

  const [sort, setSort] = useState({
    field: "subject",
    type: "asc",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const allEntries = await axios.get("/planEntry");
      dispatch(addFetchedEntries(allEntries.data));
      setLoading(false);
    };
    if (!ifAllEntriesFetched) fetchData();
  }, [ifAllEntriesFetched, dispatch]);

  const searchedAndSortedEntries = () => {
    const filteredEntries = allPlanEntries.filter((entry) => {
      const filters = [];
      if (search.subject !== "") filters.push(entry.subject === search.subject);
      if (search.day !== "" && search.day !== "Any")
        filters.push(entry.day === search.day);
      if (search.difficulty[0] !== 0 && search.difficulty[1] !== [0])
        filters.push(
          entry.difficulty >= search.difficulty[0] &&
            entry.difficulty <= search.difficulty[1]
        );

      return filters.every((value) => value);
    });

    if (sort.field !== "") {
      const sortedEntries = lodash.orderBy(
        filteredEntries,
        [sort.field],
        [sort.type]
      );

      return sortedEntries;
    }

    return filteredEntries;
  };

  const onHomeClicked = () => navigate("/");

  const onAddClicked = () => navigate("/planEntry/add");

  return (
    <Grid container spacing={2} style={{ width: "1100px", margin: "auto" }}>
      <Grid item xs={4}>
        <Tile width={400}>
          <SearchForm setSearch={setSearch} />
          <SortForm setSort={setSort} sort={sort} />
          <ButtonsDiv>
            <Button type="button" onClick={onHomeClicked}>
              <HomeOutlinedIcon />
              Home
            </Button>
            <Button type="button" onClick={onAddClicked}>
              <AddBoxOutlinedIcon />
              Add entry
            </Button>
          </ButtonsDiv>
        </Tile>
      </Grid>
      <Grid item xs={8}>
        <Tile width={600}>
          <Header>All entries</Header>
          <Loading isLoading={loading}></Loading>
          <StyledList>
            {allPlanEntries.length === 0 ? (
              <p>There are no entries yet!</p>
            ) : (
              searchedAndSortedEntries().map((planEntry) => (
                <PlanEntryListElement
                  setLoading={setLoading}
                  key={planEntry._id}
                  planEntry={planEntry}
                />
              ))
            )}
          </StyledList>
        </Tile>
      </Grid>
    </Grid>
  );
};
