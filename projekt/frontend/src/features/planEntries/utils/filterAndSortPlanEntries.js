import lodash from "lodash";
import { getSearchParams } from "./getSearchParams";
import { getSortParam } from "./getSortParam";

export const filterAndSortPlanEntries = (params, allPlanEntries) => {
  const filteredEntries = allPlanEntries.filter((entry) => {
    const { subject, day, difficulty } = getSearchParams(params);

    const filters = [];
    if (subject) filters.push(entry.subject === subject);
    if (day && day !== "Any") filters.push(entry.day === day);
    if (difficulty)
      filters.push(
        entry.difficulty >= difficulty[0] && entry.difficulty <= difficulty[1]
      );

    return filters.every((value) => value);
  });

  const [field, type] = getSortParam(params).split("-");
  const sortedEntries = lodash.orderBy(filteredEntries, [field], [type]);

  return sortedEntries;
};
