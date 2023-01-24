import { Header, Tile, ButtonsDiv, Button } from "../../components";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate, useParams } from "react-router-dom";

export const EditPlanEntry = () => {
  const navigate = useNavigate();
  const { lessonID } = useParams();

  const onAllEntriesClicked = () => navigate("/planEntry");

  const onToEntryClicked = () => navigate(`/planEntry/${lessonID}`);

  return (
    <Tile width={500} height={800}>
      <Header>Edit entry</Header>
      <PlanEntryForm type="edit" />
      <ButtonsDiv>
        <Button
          type="button"
          onClick={onAllEntriesClicked}
          startIcon={<DensitySmallOutlinedIcon />}
        >
          All entries
        </Button>
        <Button
          type="button"
          onClick={onToEntryClicked}
          startIcon={<ArrowBackIosNewOutlinedIcon />}
        >
          To entry
        </Button>
      </ButtonsDiv>
    </Tile>
  );
};
