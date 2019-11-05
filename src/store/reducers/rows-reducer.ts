import {Row} from "../../model/Row";
import {ADD_ROW, DELETE_ROW} from "../actions/row-actions";

const rowsReducer = (state: Row[] = [], action: any) => {
    let newState: Row[] = [];
    switch (action.type) {
        case ADD_ROW:
            newState = [
                ...state,
                action.payload.row
            ];
            return newState;
        case DELETE_ROW:
            return state.filter(row => row.id !== action.payload.id);
        default:
            return state;
    }
}

export default rowsReducer;
