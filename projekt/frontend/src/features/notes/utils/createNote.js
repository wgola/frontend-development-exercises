import shortUUID from "short-uuid";

export const createNote = (data) => {
  const id = shortUUID().new();
  const modificationTime = new Date();
  return { noteID: id, modificationTime: modificationTime, ...data };
};
