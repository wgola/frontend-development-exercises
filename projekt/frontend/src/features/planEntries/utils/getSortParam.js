export const getSortParam = (params) => {
  const possibleSorts = [
    "subject-asc",
    "subject-desc",
    "difficulty-desc",
    "difficulty-asc",
    "modificationTime-desc",
    "modificationTime-asc",
  ];

  const sortSearch = possibleSorts.includes(params.get("sort"))
    ? params.get("sort")
    : "subject-asc";

  return sortSearch;
};
