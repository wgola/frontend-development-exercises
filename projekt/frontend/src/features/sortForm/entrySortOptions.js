import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { styled } from "@mui/material/styles";

const StyledLabel = styled("span")`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const entrySortOptions = [
  {
    label: (
      <StyledLabel>
        <ArrowDropDownOutlinedIcon />
        Subject
      </StyledLabel>
    ),
    value: "subject-desc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropUpOutlinedIcon />
        Subject
      </StyledLabel>
    ),
    value: "subject-asc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropDownOutlinedIcon />
        Difficulty
      </StyledLabel>
    ),
    value: "difficulty-desc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropUpOutlinedIcon />
        Difficulty
      </StyledLabel>
    ),
    value: "difficulty-asc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropDownOutlinedIcon />
        Last modification
      </StyledLabel>
    ),
    value: "creationTime-desc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropUpOutlinedIcon />
        Last modification
      </StyledLabel>
    ),
    value: "creationTime-asc",
  },
];
