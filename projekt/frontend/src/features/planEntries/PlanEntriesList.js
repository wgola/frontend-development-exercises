import { filterAndSortPlanEntries } from "./utils/filterAndSortPlanEntries";
import { HomeButton, AddEntryButton } from "../../components/buttons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchForm } from "./searchForm/SearchForm.js";
import { useDispatch, useSelector } from "react-redux";
import { SortForm } from "./sortForm/SortForm.js";
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
  List,
  ListLayout,
} from "../../components";

export const PlanEntriesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [params] = useSearchParams();
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
  }, []);

  const onHomeClicked = () => navigate("/");

  const onAddClicked = () => navigate("/planEntry/add");

  return (
    <ListLayout container spacing={2}>
      <Grid item xs={4}>
        <Tile width={400}>
          <SearchForm />
          <SortForm />
          <ButtonsDiv>
            <HomeButton onClick={onHomeClicked} />
            <AddEntryButton onClick={onAddClicked} />
          </ButtonsDiv>
        </Tile>
      </Grid>
      <Grid item xs={8}>
        <Tile width={600}>
          <Header>All entries</Header>
          <Loading isLoading={loading}></Loading>
          <List>
            {allPlanEntries.length === 0 ? (
              <p>There are no entries yet!</p>
            ) : (
              ifAllEntriesFetched &&
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
          </List>
        </Tile>
      </Grid>
    </ListLayout>
  );
};
