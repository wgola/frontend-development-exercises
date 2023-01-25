import { SubmitButton, ResetButton } from "../../../components/buttons";
import { addNoteToEntry } from "../../planEntries/planEntriesSlice";
import { addNewNote, editNote, getNoteByID } from "../notesSlice";
import { ButtonsDiv, Form, Loading } from "../../../components";
import { useNavigate, useParams } from "react-router-dom";
import validationSchema from "./noteValidationSchema.js";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NoteFormFields } from "./NoteFormFields";
import { createNote } from "../utils/createNote";
import { useEffect, useState } from "react";
import axios from "../../../axios";

export const NoteForm = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lessonID, noteID } = useParams();
  const note = useSelector(getNoteByID(noteID));

  useEffect(() => {
    if (type === "edit" && !note)
      navigate(`/planEntry/${lessonID}/note/${noteID}`);
  }, []);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const initialValues = note
    ? {
        title: note.title,
        content: note.content,
        importance: note.importance,
        image: note.image,
      }
    : {
        title: "",
        content: "",
        importance: 0,
        image: "",
      };

  const formMethods = useForm({
    defaultValues: initialValues,
    resolver: validationSchema,
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onError = (error) => {
    setTimeout(() => {
      setLoading(false);
      console.log(error);
      setMessage(`Error: ${error.response.data.message}`);
      setTimeout(() => setMessage(""), 4000);
    }, 2000);
  };

  const onNoteAdded = () => {
    setTimeout(() => {
      setLoading(false);
      setMessage("Note added succesfully!");
      formMethods.reset(initialValues);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }, 2000);
  };

  const onNoteEdited = () => {
    setTimeout(() => {
      setLoading(false);
      setMessage("Note edited succesfully!");
      setTimeout(() => {
        navigate(`/planEntry/${lessonID}/note/${noteID}`);
      }, 1000);
    }, 2000);
  };

  const onAddNewNote = async (data) => {
    try {
      const newNote = createNote(data);
      const addedNote = await axios.post(
        `/planEntry/${lessonID}/note`,
        newNote
      );
      dispatch(addNewNote(addedNote.data));
      dispatch(addNoteToEntry({ lessonID, noteID: addedNote.data._id }));
      onNoteAdded();
    } catch (error) {
      onError(error);
    }
  };

  const onEditNote = async (data) => {
    try {
      const editedNote = {
        _id: noteID,
        modificationTime: new Date().toUTCString(),
        ...data,
      };
      await axios.put(`/planEntry/${lessonID}/note/${noteID}`, editedNote);
      dispatch(editNote(editedNote));
      onNoteEdited();
    } catch (error) {
      onError(error);
    }
  };

  const onSubmit = (data) => {
    setLoading(true);
    type === "add" ? onAddNewNote(data) : onEditNote(data);
  };

  const onReset = () => formMethods.reset();

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <NoteFormFields loading={loading} />
        <Loading isLoading={loading} message={message} />
        <ButtonsDiv>
          <SubmitButton disabled={loading} />
          <ResetButton onClick={onReset} disabled={loading} />
        </ButtonsDiv>
      </Form>
    </FormProvider>
  );
};
