import { getSearchParams } from "./getSearchParams";
import { getSortParam } from "./getSortParam";
import lodash from "lodash";

export const filterAndSortNotes = (params, allNotes) => {
  const filteredNotes = allNotes.filter((note) => {
    const {
      title,
      "content length": contentLength,
      importance,
    } = getSearchParams(params);

    const filters = [];
    if (title) filters.push(note.title === title);
    if (contentLength && contentLength[0])
      filters.push(
        note.content.length >= contentLength[0] &&
          note.content.length <= contentLength[1]
      );
    if (importance)
      filters.push(
        note.importance >= importance[0] && note.importance <= importance[1]
      );

    return filters.every((filter) => filter);
  });

  const [field, type] = getSortParam(params).split("-");
  if (field === "modificationTime") {
    const sortedNotes = lodash.orderBy(
      filteredNotes,
      [(note) => new Date(note.modificationTime)],
      [type]
    );

    return sortedNotes;
  }

  const sortedNotes = lodash.orderBy(filteredNotes, [field], [type]);

  return sortedNotes;
};
