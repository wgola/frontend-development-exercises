import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { SortOption } from "../../../components";

export const noteSortOptions = [
  {
    label: (
      <SortOption>
        <ArrowDropDownOutlinedIcon />
        Title
      </SortOption>
    ),
    value: "title-asc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropUpOutlinedIcon />
        Title
      </SortOption>
    ),
    value: "title-desc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropDownOutlinedIcon />
        Importance
      </SortOption>
    ),
    value: "importance-desc",
  },
  {
    label: (
      <SortOption>
        <ArrowDropUpOutlinedIcon />
        Importance
      </SortOption>
    ),
    value: "importance-asc",
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
