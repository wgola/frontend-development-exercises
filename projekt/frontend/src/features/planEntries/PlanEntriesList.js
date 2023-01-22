import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios.js";
import { addFetchedEntries, getAllPlanEntries } from "./planEntriesSlice";
import { styled } from "@mui/material/styles";
import { Tile } from "../../components/Tile.js";
import { Grid } from "@mui/material";
import { PlanEntryListElement } from "../../components/PlanEntryListElement.js";
import { SearchForm } from "./searchForm/SearchForm.js";
import { Loading } from "../../components/Loading.js";
import { SortForm } from "../sortForm/SortForm.js";
import { Header } from "../../components/Header.js";
import lodash from "lodash";

const StyledList = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const PlanEntriesList = () => {
  const dispatch = useDispatch();
  const allPlanEntries = useSelector(getAllPlanEntries);

  const [search, setSearch] = useState({
    subject: "",
    day: "",
    difficulty: [0, 0],
  });

  const [sort, setSort] = useState({
    field: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const allEntries = await axios.get("/planEntry");
    dispatch(addFetchedEntries(allEntries.data));
    setLoading(false);
  };

  useEffect(() => {
    if (allPlanEntries.length <= 1) fetchData();
  }, []);

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

  return (
    <Grid container spacing={2} style={{ width: "1100px", margin: "auto" }}>
      <Grid item xs={4}>
        <Tile width={400}>
          <SearchForm setSearch={setSearch} />
          <SortForm setSort={setSort} />
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
