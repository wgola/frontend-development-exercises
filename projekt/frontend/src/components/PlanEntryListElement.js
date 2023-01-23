import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "./Button";

const StyledEntry = styled("div")`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const Title = styled("div")`
  padding: 5px;
  font-weight: bold;
`;

const Description = styled("div")`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const ModificationDate = styled("div")`
  margin: 5px;
  font-size: 12px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlanEntryListElement = ({ planEntry, setLoading }) => {
  const navigate = useNavigate();

  const onMoreClicked = () => navigate(`/planEntry/${planEntry._id}`);

  return (
    <StyledEntry>
      <Title>Subject: {planEntry.subject}</Title>
      <Description>
        <span>{planEntry.day}</span>
        <span>difficulty: {planEntry.difficulty}</span>
      </Description>
      <ModificationDate>
        Last modified: {planEntry.modificationTime}
        <Button type="button" onClick={onMoreClicked}>
          <MoreHorizOutlinedIcon />
          More
        </Button>
      </ModificationDate>
    </StyledEntry>
  );
};
