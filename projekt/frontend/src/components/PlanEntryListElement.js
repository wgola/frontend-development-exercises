import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { styled } from "@mui/material/styles";
import { Button } from "./Button";
import { ButtonsDiv } from "../components";

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

const AdditionDate = styled("div")`
  font-size: 12px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PlanEntryListElement = ({ planEntry }) => {
  return (
    <StyledEntry>
      <Title>Subject: {planEntry.subject}</Title>
      <Description>
        <span>{planEntry.day}</span>
        <span>difficulty: {planEntry.difficulty}</span>
      </Description>
      <AdditionDate>Last modified: {planEntry.modificationTime}</AdditionDate>
      <ButtonsDiv width={480}>
        <Button>
          <MoreHorizOutlinedIcon />
          More
        </Button>
        <Button>
          <EditOutlinedIcon />
          Edit
        </Button>
        <Button>
          <DeleteOutlineOutlinedIcon />
          Delete
        </Button>
      </ButtonsDiv>
    </StyledEntry>
  );
};
