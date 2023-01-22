import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import { Button, ButtonsDiv, Tile, Header } from "../../components";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

export const AddPlanEntry = () => {
  const navigate = useNavigate();

  const onHomeClick = () => navigate("/");

  const onAllEntriesClick = () => navigate("/planEntry");

  return (
    <Tile width={500} height={800}>
      <Header>Add new entry</Header>
      <PlanEntryForm type="add" />
      <ButtonsDiv>
        <Button type="button" onClick={onAllEntriesClick}>
          <DensitySmallOutlinedIcon />
          All entries
        </Button>
        <Button type="button" onClick={onHomeClick}>
          <HomeOutlinedIcon />
          Home
        </Button>
      </ButtonsDiv>
    </Tile>
  );
};
