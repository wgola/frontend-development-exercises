import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import { Button, ButtonsDiv, Tile, Header } from "../../components";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

export const AddPlanEntry = () => {
  const navigate = useNavigate();

  const onHome = () => navigate("/");

  return (
    <Tile width={500} height={800}>
      <Header>Add new entry</Header>
      <PlanEntryForm type="add" />
      <ButtonsDiv>
        <Button>
          <DensitySmallOutlinedIcon />
          All entries
        </Button>
        <Button onClick={onHome}>
          <HomeOutlinedIcon />
          Home
        </Button>
      </ButtonsDiv>
    </Tile>
  );
};
