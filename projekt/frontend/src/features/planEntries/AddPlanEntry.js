import { Button } from "../../components/Button.js";
import { ButtonsDiv } from "../../components/ButtonsDiv.js";
import { Tile } from "../../components/Tile.js";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";

export const AddPlanEntry = () => {
  const navigate = useNavigate();

  const onHome = () => navigate("/");

  return (
    <Tile width={500} height={800}>
      <h2>Add new entry</h2>
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
