import EntryForm from "./EntryForm";

const AddTimetableEntry = ({ setEntries }) => {
    const initialValues = {
        name: "",
        teacher: "",
        day: "",
        time: "",
        place: ""
    };
    return (
        <>
            <p>Add new entry: </p>
            <EntryForm setEntries={setEntries} initialValues={initialValues} entryID={null} />
        </>
        )
};

export default AddTimetableEntry;