import { Input } from "../../components";
import { entrySortOptions } from "./entrySortOptions";

export const SortFields = () => (
  <>
    <Input label="sort by" select options={entrySortOptions} />
  </>
);
