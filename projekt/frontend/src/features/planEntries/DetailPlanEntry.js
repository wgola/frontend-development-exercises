import { addNewEntry, deleteEntry, getPlanEntryByID } from "./planEntriesSlice";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Header, Loading, Tile, Image } from "../../components";
import { deleteNotesByIDs } from "../notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "../../axios";
import {
  DetailsDiv,
  BothSides,
  ButtonDiv,
  ModificationTime,
} from "../../components/detailPlanEntryComponents";
import {
  StyledLayout,
  LeftDiv,
  RightDiv,
  Info,
  MessageDiv,
} from "../../components/detailComponents";
import {
  DeleteButton,
  EditButton,
  AllEntriesButton,
  AddNoteButton,
  AllNotesButton,
} from "../../components/buttons";

export const DetailPlanEntry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lessonID } = useParams();
  const planEntry = useSelector(getPlanEntryByID(lessonID));
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading plan entry...");
  const [allEntriesClicked, setAllEntriesClicked] = useState(false);

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
  }, []);

  const onEditClicked = () => navigate(`/planEntry/${lessonID}/edit`);

  const onDeleteClicked = async () => {
    try {
      await axios.delete(`/planEntry/${lessonID}`);
      setMessage("Entry deleted! Redirecting to all entries...");
      setTimeout(() => {
        dispatch(deleteNotesByIDs(planEntry.notes));
        dispatch(deleteEntry(lessonID));
        navigate("/planEntry");
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.message);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const onAddNoteClicked = () => navigate(`/planEntry/${lessonID}/note/add`);

  const onAllNotesClicked = () => {
    if (!allEntriesClicked) {
      navigate(`/planEntry/${lessonID}/note`);
    } else {
      navigate(`/planEntry/${lessonID}`);
    }
    setAllEntriesClicked(!allEntriesClicked);
  };

  const onAllEntriesClicked = () => navigate(`/planEntry`);

  return (
    <>
      <Tile width={1100}>
        {planEntry ? (
          <StyledLayout>
            <LeftDiv>
              <Image src={planEntry.image} alt={"Plan entry image"} />
              {message && <MessageDiv>{message}</MessageDiv>}
            </LeftDiv>
            <RightDiv>
              <Header>Plan entry #{lessonID}</Header>
              <DetailsDiv>
                <BothSides>
                  <span>
                    Subject: <Info>{planEntry.subject}</Info>
                  </span>
                  <span>
                    <Info>
                      {planEntry.day}, {planEntry.time}{" "}
                    </Info>
                  </span>
                </BothSides>
                <span>
                  Teacher: <Info>{planEntry.teacher}</Info>
                </span>
                <span>
                  Number of notes: <Info>{planEntry.notes.length}</Info>
                </span>
                <BothSides>
                  <span>
                    Difficulty: <Info>{planEntry.difficulty}</Info>
                  </span>
                  <ModificationTime>
                    Last modified: <Info>{planEntry.modificationTime}</Info>
                  </ModificationTime>
                </BothSides>
              </DetailsDiv>
              <ButtonDiv width={600}>
                <EditButton onClick={onEditClicked} />
                <DeleteButton onClick={onDeleteClicked} />
                <AllEntriesButton onClick={onAllEntriesClicked} />
                <AddNoteButton onClick={onAddNoteClicked} />
                <AllNotesButton
                  onClick={onAllNotesClicked}
                  disabled={planEntry.notes.length === 0}
                />
              </ButtonDiv>
            </RightDiv>
          </StyledLayout>
        ) : (
          <Loading isLoading={loading} message={message} />
        )}
      </Tile>
      <Outlet />
    </>
  );
};
