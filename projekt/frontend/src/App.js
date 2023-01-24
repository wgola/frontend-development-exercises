import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "./components/Button";
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
        <Button
          type="button"
          onClick={onAllEntriesClick}
          startIcon={<DensitySmallOutlinedIcon />}
        >
          All entries
        </Button>
        <Button
          type="button"
          onClick={onAddEntryClick}
          startIcon={<AddBoxOutlinedIcon />}
        >
          Add entry
        </Button>
      </StyledDiv>
    </Tile>
  );
};
