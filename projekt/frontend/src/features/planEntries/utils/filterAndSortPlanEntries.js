import lodash from "lodash";

export const filterAndSortPlanEntries = (params, allPlanEntries) => {
  const filteredEntries = allPlanEntries.filter((entry) => {
    const [subject, day, difficulty] = [
      params.get("subject"),
      params.get("day"),
      params.get("difficulty")
        ? params
            .get("difficulty")
            .split(",")
            .map((value) => parseInt(value))
        : "",
    ];

    const filters = [];
    if (subject) filters.push(entry.subject === subject);
    if (day && day !== "Any") filters.push(entry.day === day);
    if (difficulty)
      filters.push(
        entry.difficulty >= difficulty[0] && entry.difficulty <= difficulty[1]
      );

    return filters.every((value) => value);
  });

  if (params.get("sort")) {
    const [field, type] = params.get("sort").split("-");
    const sortedEntries = lodash.orderBy(filteredEntries, [field], [type]);

    return sortedEntries;
  }

  return filteredEntries;
};
