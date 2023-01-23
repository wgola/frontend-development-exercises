import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import { Button, Header, Loading, Tile } from "../../components";
import { Image } from "../../components/Image";
import { addNewEntry, deleteEntry, getPlanEntryByID } from "./planEntriesSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

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
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: space-around;
`;

const BothSides = styled("span")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfo = styled("span")`
  font-weight: bold;
  letter-spacing: 2px;
`;

const ButtonDiv = styled("div")`
  margin: 30px 0px;
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

export const DetailPlanEntry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lessonID } = useParams();
  const planEntry = useSelector(getPlanEntryByID(lessonID));
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading plan entry...");

  useEffect(() => {
    const fetchEntry = async () => {
      const entry = await axios.get(`/planEntry/${lessonID}`);
      if (!entry.data) {
        setLoading(false);
        setMessage(
          `Entry with ID ${lessonID} doesn't exist. Redirecting to home page...`
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        dispatch(addNewEntry(entry.data));
        setLoading(false);
        setMessage("");
      }
    };
    if (!planEntry) fetchEntry();
    else {
      setLoading(false);
      setMessage("");
    }
  }, [lessonID, dispatch, planEntry, navigate]);

  const onEditClicked = () => navigate(`/planEntry/${lessonID}/edit`);

  const onDeleteClicked = async () => {
    try {
      await axios.delete(`/planEntry/${lessonID}`);
      setMessage("Entry deleted! Redirecting to all entries...");
      setTimeout(() => {
        dispatch(deleteEntry(lessonID));
        navigate("/planEntry");
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.message);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const onAddNoteClicked = () => navigate(`/planEntry/${lessonID}/note/add`);

  const onAllNotesClicked = () => navigate(`/planEntry/${lessonID}/note`);

  const onAllEntriesClicked = () => navigate(`/planEntry`);

  return (
    <Tile width={1100}>
      {planEntry ? (
        <StyledLayout>
          <LeftDiv>
            <Image src={planEntry.image} alt={`${planEntry.image} image`} />
            {message && <MessageDiv>{message}</MessageDiv>}
          </LeftDiv>
          <RightDiv>
            <Header>Plan entry #{lessonID}</Header>
            <DetailsDiv>
              <BothSides>
                <span>
                  Subject: <StyledInfo>{planEntry.subject}</StyledInfo>
                </span>
                <span>
                  <StyledInfo>
                    {planEntry.day}, {planEntry.time}{" "}
                  </StyledInfo>
                </span>
              </BothSides>
              <span>
                Teacher: <StyledInfo>{planEntry.teacher}</StyledInfo>
              </span>
              <span>
                Number of notes:{" "}
                <StyledInfo>{planEntry.notes.length}</StyledInfo>
              </span>
              <BothSides>
                <span>
                  Difficulty: <StyledInfo>{planEntry.difficulty}</StyledInfo>
                </span>
                <span style={{ fontSize: "13.5px" }}>
                  Last modified:{" "}
                  <StyledInfo>{planEntry.modificationTime}</StyledInfo>
                </span>
              </BothSides>
            </DetailsDiv>
            <ButtonDiv width={600}>
              <Button onClick={onEditClicked}>
                <EditOutlinedIcon />
                Edit
              </Button>
              <Button onClick={onDeleteClicked}>
                <DeleteOutlineOutlinedIcon />
                Delete
              </Button>
              <Button onClick={onAllEntriesClicked}>
                <DensitySmallOutlinedIcon />
                All entries
              </Button>
              <Button onClick={onAddNoteClicked}>
                <NoteAddOutlinedIcon /> Add note
              </Button>
              <Button
                onClick={onAllNotesClicked}
                disabled={planEntry.notes.length === 0}
              >
                <NoteAltOutlinedIcon />
                All notes
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
