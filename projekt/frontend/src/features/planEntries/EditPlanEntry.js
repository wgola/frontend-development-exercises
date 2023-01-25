import { Header, Tile, ButtonsDiv } from "../../components";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm";
import { useNavigate, useParams } from "react-router-dom";
import { AllEntriesButton, ToEntryButton } from "../../components/buttons";

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
