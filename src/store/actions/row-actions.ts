import {Row} from "../../model/Row";

export const ADD_ROW = 'rows:addRow';
export const DELETE_ROW = 'rows:deleteRow';

export function addRow(newRow: Row) {
    return {
        type: ADD_ROW,
        payload: {
            row: newRow
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
