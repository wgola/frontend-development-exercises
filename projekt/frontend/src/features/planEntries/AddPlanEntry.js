import { AllEntriesButton, HomeButton } from "../../components/buttons";
import { PlanEntryForm } from "./planEntryForm/PlanEntryForm.js";
import { ButtonsDiv, Tile, Header } from "../../components";
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
        <AllEntriesButton onClick={onAllEntriesClick} />
        <HomeButton onClick={onHomeClick} />
      </ButtonsDiv>
    </Tile>
  );
};
