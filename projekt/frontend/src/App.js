import { Button } from "./components/Button";
import { Tile } from "./components/Tile";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";

const StyledDiv = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const App = () => {
  const navigate = useNavigate();

  const onClickAllEntries = () => navigate("/planEntry");

  return (
    <Tile width={400} height={250}>
      <h1>Home page</h1>
      <StyledDiv>
        <Button type="button" onClick={onClickAllEntries}>
          <DensitySmallOutlinedIcon />
          All entries
        </Button>
      </StyledDiv>
    </Tile>
  );
};
