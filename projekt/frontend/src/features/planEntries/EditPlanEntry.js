import { Header, Tile, ButtonsDiv, Button } from "../../components";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export const EditPlanEntry = () => {
  return (
    <Tile width={500} height={800}>
      <Header>Edit entry</Header>
      <PlanEntryForm type="edit" />
      <ButtonsDiv>
        <Button type="button">
          <DensitySmallOutlinedIcon />
          All entries
        </Button>
        <Button type="button">
          <ArrowBackIosNewOutlinedIcon />
          To entry
        </Button>
      </ButtonsDiv>
    </Tile>
  );
};
