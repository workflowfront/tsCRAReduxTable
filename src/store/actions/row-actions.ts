import {Row} from "../../model/Row";

export const ADD_ROW = 'rows:addRow';
export const DELETE_ROW = 'rows:deleteRow';
export const EDIT_ROW = 'rows:editRow';

export function addRow(newRow: Row) {
    return {
        type: ADD_ROW,
        payload: {
            row: newRow
        }
    }
}

export function editRow(id: number, saveAttr: boolean) {
  return {
    type: EDIT_ROW,
    payload: {
      id, saveAttr
    }
  }
}

export function deleteRow(id: number) {
    return {
        type: DELETE_ROW,
        payload: {
            id
        }
    }
}
