import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Button, Form, ButtonsDiv, Loading } from "../../../components";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { PlanEntryFormFields } from "./PlanEntryFormFields.js";
import { FormProvider, useForm } from "react-hook-form";
import validationSchema from "./planEntryValidation.js";
import { createEntry } from "../utils/createEntry.js";
import {
  addNewEntry,
  editEntry,
  getPlanEntryByID,
} from "../planEntriesSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../axios.js";
import { useEffect, useState } from "react";

export const PlanEntryForm = ({ type }) => {
  const dispatch = useDispatch();
  const { lessonID } = useParams();
  const entry = useSelector(getPlanEntryByID(lessonID));
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "edit" && !entry) navigate(`/planEntry/${lessonID}`);
  }, [type, entry, lessonID, navigate]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const initialValues = entry
    ? {
        subject: entry.subject,
        teacher: entry.teacher,
        day: entry.day,
        time: entry.time,
        difficulty: entry.difficulty,
        image: entry.image,
      }
    : {
        subject: "",
        teacher: "",
        day: "",
        time: "",
        difficulty: 0,
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

  const onEntryAdded = () => {
    setTimeout(() => {
      setLoading(false);
      setMessage("Entry added succesfully!");
      formMethods.reset(initialValues);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }, 2000);
  };

  const onEntryEdited = () => {
    setTimeout(() => {
      setLoading(false);
      setMessage("Entry edited succesfully!");
      setTimeout(() => {
        navigate(`/planEntry/${lessonID}`);
      }, 1000);
    }, 2000);
  };

  const onAddNewEntry = async (data) => {
    try {
      const newEntry = createEntry(data);
      const addedEntry = await axios.post("/planEntry", newEntry);
      dispatch(addNewEntry(addedEntry.data));
      onEntryAdded();
    } catch (error) {
      onError(error);
    }
  };

  const onEditEntry = async (data) => {
    try {
      const editedEntry = {
        _id: lessonID,
        modificationTime: new Date().toUTCString(),
        ...data,
      };
      await axios.put(`/planEntry/${lessonID}`, editedEntry);
      dispatch(editEntry(editedEntry));
      onEntryEdited();
    } catch (error) {
      onError(error);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    if (type === "add") onAddNewEntry(data);
    if (type === "edit") onEditEntry(data);
  };

  const onReset = () => formMethods.reset();

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <PlanEntryFormFields />
        <Loading isLoading={loading} message={message} />
        <ButtonsDiv>
          <Button type="submit" disabled={loading}>
            <PublishOutlinedIcon />
            Submit
          </Button>
          <Button type="button" onClick={onReset} disabled={loading}>
            <RestartAltOutlinedIcon />
            Reset
          </Button>
        </ButtonsDiv>
      </Form>
    </FormProvider>
  );
};
