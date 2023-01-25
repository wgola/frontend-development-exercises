export const getSearchParams = (params) => {
  const possibleLengths = ["1-50", "51-100", "101-150", "151-175"];
  const contentLengthSearch = possibleLengths.includes(
    params.get("content length")
  )
    ? params
        .get("content length")
        .split("-")
        .map((value) => parseInt(value))
    : "";

  const [lowerImportance, upperImportance] = params.get("importance")
    ? params
        .get("importance")
        .split(",")
        .map((value) => parseInt(value))
    : [1, 10];

  const importanceSearch =
    lowerImportance <= 10 &&
    lowerImportance >= 1 &&
    upperImportance <= 10 &&
    upperImportance >= 1 &&
    lowerImportance <= upperImportance
      ? [lowerImportance, upperImportance]
      : [1, 10];

  return {
    title: params.get("title") || "",
    "content length": contentLengthSearch,
    importance: importanceSearch,
  };
};
