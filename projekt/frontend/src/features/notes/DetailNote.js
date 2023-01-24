import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewNote, deleteNote, getNoteByID } from "./notesSlice";
import { useEffect, useState } from "react";
import { Button, Header, Loading } from "../../components";
import axios from "../../axios";
import { Tile } from "../../components";
import { styled } from "@mui/material/styles";
import { Image } from "../../components/Image";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteNoteFromEntry } from "../planEntries/planEntriesSlice";

const StyledLayout = styled("div")`
  width: 1050px;
  display: flex;
  justify-content: left;
  gap: 15px;
`;

const LeftDiv = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightDiv = styled("div")`
  padding: 17px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 850px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const DetailsDiv = styled("div")`
  height: 170px;
  display: flex;
  padding: 15px;
  flex-direction: row;
`;

const StyledInfo = styled("span")`
  font-weight: bold;
  letter-spacing: 2px;
`;

const ButtonDiv = styled("div")`
  margin: 8px 0px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

const MessageDiv = styled("div")`
  padding: 7px;
  width: 200px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 15px;
`;

const LeftColumn = styled("div")`
  gap: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled("div")`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DetailNote = () => {
  const { lessonID, noteID } = useParams();
  const navigate = useNavigate();
  const note = useSelector(getNoteByID(noteID));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading plan entry...");

  useEffect(() => {
    const fetchNote = async () => {
      const note = await axios.get(`/planEntry/${lessonID}/note/${noteID}`);
      if (!note.data) {
        setLoading(false);
        setMessage(
          `Note with ID ${noteID} doesn't exist. Redirecting to home page...`
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        dispatch(addNewNote(note.data));
        setLoading(false);
        setMessage("");
      }
    };
    if (!note) fetchNote();
    else {
      setLoading(false);
      setMessage("");
    }
  }, []);

  const onDeleteClicked = async () => {
    try {
      await axios.delete(`/planEntry/${lessonID}/note/${noteID}`);
      setMessage("Note deleted! Redirecting to entry...");
      setTimeout(() => {
        dispatch(deleteNoteFromEntry({ lessonID, noteID }));
        dispatch(deleteNote(noteID));
        navigate(`/planEntry/${lessonID}`);
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.message);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const onAllEntriesClicked = () => navigate(`/planEntry`);

  const onToEntryClicked = () => navigate(`/planEntry/${lessonID}`);

  const onAllNotesClicked = () => navigate(`/planEntry/${lessonID}/note`);

  const onEditClicked = () =>
    navigate(`/planEntry/${lessonID}/note/${noteID}/edit`);

  return (
    <Tile width={1100}>
      {note ? (
        <StyledLayout>
          <LeftDiv>
            <Image src={note.image} alt="note image" />
            {message && <MessageDiv>{message}</MessageDiv>}
          </LeftDiv>
          <RightDiv>
            <Header>Note #{note._id}</Header>
            <DetailsDiv>
              <LeftColumn>
                <span>
                  Title: <StyledInfo>{note.title}</StyledInfo>
                </span>
                <span>Content:</span>
                <span>{note.content}</span>
              </LeftColumn>
              <RightColumn>
                <span>
                  Importance: <StyledInfo>{note.importance}</StyledInfo>
                </span>
                <span
                  style={{
                    fontSize: "13.5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span>Last modified:</span>
                  <StyledInfo>{note.modificationTime}</StyledInfo>
                </span>
              </RightColumn>
            </DetailsDiv>
            <ButtonDiv>
              <Button
                startIcon={<DensitySmallOutlinedIcon />}
                onClick={onAllEntriesClicked}
              >
                All entries
              </Button>
              <Button
                startIcon={<ArrowBackIosNewOutlinedIcon />}
                onClick={onToEntryClicked}
              >
                To entry
              </Button>
              <Button
                startIcon={<NoteAltOutlinedIcon />}
                onClick={onAllNotesClicked}
              >
                All notes
              </Button>
              <Button startIcon={<EditOutlinedIcon />} onClick={onEditClicked}>
                Edit
              </Button>
              <Button
                startIcon={<DeleteOutlineOutlinedIcon />}
                onClick={onDeleteClicked}
              >
                Delete
              </Button>
            </ButtonDiv>
          </RightDiv>
        </StyledLayout>
      ) : (
        <Loading isLoading={loading} message={message} />
      )}
    </Tile>
  );
};
