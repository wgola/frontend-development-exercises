const difficultyMarks = [
  {
    value: 0,
    label: "all",
  },
];

for (let i = 1; i <= 10; i++) {
  difficultyMarks.push({ value: i, label: i });
}

export { difficultyMarks };
