import lodash from "lodash";

export const filterAndSortNotes = (params, allNotes) => {
  const filteredNotes = allNotes.filter((note) => {
    const [title, contentLength, importance] = [
      params.get("title"),
      params.get("content length")
        ? params
            .get("content length")
            .split("-")
            .map((value) => parseInt(value))
        : "",
      params.get("importance")
        ? params
            .get("importance")
            .split(",")
            .map((value) => parseInt(value))
        : "",
    ];
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

  if (params.get("sort")) {
    const [field, type] = params.get("sort").split("-");
    const sortedNotes = lodash.orderBy(filteredNotes, [field], [type]);

    return sortedNotes;
  }

  return filteredNotes;
};
