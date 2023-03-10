import { AllEntriesButton, ToEntryButton } from "../../components/buttons";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm";
import { Header, Tile, ButtonsDiv } from "../../components";
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
        <AllEntriesButton onClick={onAllEntriesClicked} />
        <ToEntryButton onClick={onToEntryClicked} />
      </ButtonsDiv>
    </Tile>
  );
};
