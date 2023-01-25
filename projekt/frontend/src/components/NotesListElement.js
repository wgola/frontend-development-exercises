import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { MoreButton } from "./buttons";

const StyledNote = styled("div")`
  margin: 5px;
  width: 500px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 15px;
  border-radius: 15px;
`;

const LeftColumn = styled("div")`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightColumn = styled("div")`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledImg = styled("img")`
  width: 60px;
  height: 60px;
  border: 2px solid ${({ theme }) => theme.palette.background.main};
  border-radius: 15px;
`;

const Title = styled("span")`
  font-weight: bold;
  font-size: 18px;
`;

const ModificationDate = styled("span")`
  font-size: 12px;
`;

export const NotesListElement = ({ note }) => {
  const { lessonID } = useParams();
  const navigate = useNavigate();

  const onMoreClicked = () =>
    navigate(`/planEntry/${lessonID}/note/${note._id}`);

  return (
    <StyledNote>
      <LeftColumn>
        <Title>Title: {note.title}</Title>
        <span>Content lenght: {note.content.length}</span>
        <span>Importance: {note.importance}</span>
        <ModificationDate>
          Last modified: {note.modificationTime}
        </ModificationDate>
      </LeftColumn>
      <RightColumn>
        <StyledImg src={note.image} alt={"image"} />
        <MoreButton onClick={onMoreClicked} />
      </RightColumn>
    </StyledNote>
  );
};
