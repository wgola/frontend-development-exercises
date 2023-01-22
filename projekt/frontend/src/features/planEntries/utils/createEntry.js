import shortUUID from "short-uuid";

export const createEntry = (data) => {
  const id = shortUUID.new();
  const date = new Date();
  return { lessonID: id, creationTime: date, ...data };
};
