import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { SortOption } from "../../../components";

export const entrySortOptions = [
  {
    label: (
      <SortOption>
        <ArrowDropDownOutlinedIcon />
        Subject
      </SortOption>
    ),
    value: "subject-asc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropUpOutlinedIcon />
        Subject
      </SortOption>
    ),
    value: "subject-desc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropDownOutlinedIcon />
        Difficulty
      </SortOption>
    ),
    value: "difficulty-desc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropUpOutlinedIcon />
        Difficulty
      </SortOption>
    ),
    value: "difficulty-asc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropDownOutlinedIcon />
        Last modification
      </SortOption>
    ),
    value: "modificationTime-desc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropUpOutlinedIcon />
        Last modification
      </SortOption>
    ),
    value: "modificationTime-asc",
  },
];
