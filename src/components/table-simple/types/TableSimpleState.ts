import {Row} from "../../../model/Row";

export interface TableSimpleState {
  data: Row[];
  filterText: any;
  rowSelects: string[];
}
