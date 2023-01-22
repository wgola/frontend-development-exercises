import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios.js";
import { addFetchedEntries, getAllPlanEntries } from "./planEntriesSlice";
import { styled } from "@mui/material/styles";
import { Tile } from "../../components/Tile.js";
import { Grid } from "@mui/material";
import { PlanEntryListElement } from "../../components/PlanEntryListElement.js";

const StyledList = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const PlanEntriesList = () => {
  const dispatch = useDispatch();
  const allPlanEntries = useSelector(getAllPlanEntries);

  const fetchData = async () => {
    const allEntries = await axios.get("/planEntry");
    dispatch(addFetchedEntries(allEntries.data));
  };

  useEffect(() => {
    if (allPlanEntries.length <= 1) fetchData();
  });

  return (
    <Grid container spacing={2} style={{ width: "1100px", margin: "auto" }}>
      <Grid item xs={4}>
        <Tile width={400}>
          <h2>Search</h2>
        </Tile>
      </Grid>
      <Grid item xs={8}>
        <Tile width={600}>
          <h2>All entries</h2>
          <StyledList>
            {allPlanEntries.length === 0 ? (
              <p>There are no entries yet!</p>
            ) : (
              allPlanEntries.map((planEntry) => (
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
