export const getSearchParams = (params) => {
  const possibleDays = [
    "",
    "Any",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const daySearch = possibleDays.includes(params.get("day"))
    ? params.get("day")
    : "";

  const [lowerDifficulty, upperDifficulty] = params.get("difficulty")
    ? params
        .get("difficulty")
        .split(",")
        .map((value) => parseInt(value))
    : [1, 10];

  const difficultySearch =
    lowerDifficulty <= 10 &&
    lowerDifficulty >= 1 &&
    upperDifficulty <= 10 &&
    upperDifficulty >= 1 &&
    lowerDifficulty <= upperDifficulty
      ? [lowerDifficulty, upperDifficulty]
      : [1, 10];

  return {
    subject: params.get("subject") || "",
    day: daySearch,
    difficulty: difficultySearch,
  };
};
