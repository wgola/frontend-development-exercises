import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SearchForm } from "./searchForm/SearchForm.js";
import { useDispatch, useSelector } from "react-redux";
import { SortForm } from "./sortForm/SortForm.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "../../axios.js";
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
import { filterAndSortPlanEntries } from "./utils/filterAndSortPlanEntries";

const StyledList = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const PlanEntriesList = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allPlanEntries = useSelector(getAllPlanEntries);
  const ifAllEntriesFetched = useSelector(getIfAllEntriesFetched);

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

  const onHomeClicked = () => navigate("/");

  const onAddClicked = () => navigate("/planEntry/add");

  return (
    <Grid container spacing={2} style={{ width: "1100px", margin: "auto" }}>
      <Grid item xs={4}>
        <Tile width={400}>
          <SearchForm />
          <SortForm />
          <ButtonsDiv>
            <Button
              type="button"
              onClick={onHomeClicked}
              startIcon={<HomeOutlinedIcon />}
            >
              Home
            </Button>
            <Button
              type="button"
              onClick={onAddClicked}
              startIcon={<AddBoxOutlinedIcon />}
            >
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
              filterAndSortPlanEntries(params, allPlanEntries).map(
                (planEntry) => (
                  <PlanEntryListElement
                    setLoading={setLoading}
                    key={planEntry._id}
                    planEntry={planEntry}
                  />
                )
              )
            )}
          </StyledList>
        </Tile>
      </Grid>
    </Grid>
  );
};
