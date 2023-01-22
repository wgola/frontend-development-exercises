import { entrySortOptions } from "./entrySortOptions";
import { Input } from "../../../components";

export const SortFields = () => (
  <>
    <Input label="sort by" select options={entrySortOptions} />
  </>
);
