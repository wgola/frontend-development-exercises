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

export const noteSortOptions = [
  {
    label: (
      <StyledLabel>
        <ArrowDropDownOutlinedIcon />
        Title
      </StyledLabel>
    ),
    value: "title-asc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropUpOutlinedIcon />
        Title
      </StyledLabel>
    ),
    value: "title-desc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropDownOutlinedIcon />
        Importance
      </StyledLabel>
    ),
    value: "importance-desc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropUpOutlinedIcon />
        Importance
      </StyledLabel>
    ),
    value: "importance-asc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropDownOutlinedIcon />
        Last modification
      </StyledLabel>
    ),
    value: "modificationTime-desc",
  },
  {
    label: (
      <StyledLabel>
        <ArrowDropUpOutlinedIcon />
        Last modification
      </StyledLabel>
    ),
    value: "modificationTime-asc",
  },
];
