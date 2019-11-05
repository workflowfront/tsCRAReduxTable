import {Row} from "../../model/Row";
import {ADD_ROW, DELETE_ROW, EDIT_ROW} from "../actions/row-actions";

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
      case EDIT_ROW:
        state.map(row => {
          if (row.id === action.payload.id && !action.payload.saveAttr) {
           row.editable = true;
           row.saveAttr = false;
        } else  if (row.id === action.payload.id && action.payload.saveAttr){
            row.editable = false;
            row.saveAttr = true;
          }});
        return [
          ...state
        ];
        default:
            return state;
    }
}

export default rowsReducer;
