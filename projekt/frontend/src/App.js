import { AllEntriesButton, AddEntryButton } from "./components/buttons";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Tile } from "./components/Tile";

const StyledDiv = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const App = () => {
  const navigate = useNavigate();

  const onAllEntriesClick = () => navigate("/planEntry");

  const onAddEntryClick = () => navigate("/planEntry/add");

  return (
    <Tile width={400} height={250}>
      <h1>Home page</h1>
      <StyledDiv>
        <AllEntriesButton onClick={onAllEntriesClick} />
        <AddEntryButton onClick={onAddEntryClick} />
      </StyledDiv>
    </Tile>
  );
};
