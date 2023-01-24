export const getSortParam = (params) => {
  const possibleSorts = [
    "title-asc",
    "title-desc",
    "importance-asc",
    "importance-desc",
    "modificationTime-asc",
    "modificationTime-desc",
  ];

  const sortSearch = possibleSorts.includes(params.get("sort"))
    ? params.get("sort")
    : "title-asc";

  return sortSearch;
};
