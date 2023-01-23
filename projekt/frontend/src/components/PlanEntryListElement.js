import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ButtonsDiv } from "../components";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import axios from "../axios.js";
import { deleteEntry } from "../features/planEntries/planEntriesSlice";

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

export const PlanEntryListElement = ({ planEntry, setLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onMoreClicked = () => navigate(`/planEntry/${planEntry._id}`);

  const onEditClicked = () => navigate(`/planEntry/${planEntry._id}/edit`);

  const onDeleteClicked = async () => {
    setLoading(true);
    await axios.delete(`/planEntry/${planEntry._id}`);
    dispatch(deleteEntry(planEntry._id));
    setLoading(false);
  };

  return (
    <StyledEntry>
      <Title>Subject: {planEntry.subject}</Title>
      <Description>
        <span>{planEntry.day}</span>
        <span>difficulty: {planEntry.difficulty}</span>
      </Description>
      <AdditionDate>Last modified: {planEntry.modificationTime}</AdditionDate>
      <ButtonsDiv width={480}>
        <Button type="button" onClick={onMoreClicked}>
          <MoreHorizOutlinedIcon />
          More
        </Button>
        <Button type="button" onClick={onEditClicked}>
          <EditOutlinedIcon />
          Edit
        </Button>
        <Button type="button" onClick={onDeleteClicked}>
          <DeleteOutlineOutlinedIcon />
          Delete
        </Button>
      </ButtonsDiv>
    </StyledEntry>
  );
};
