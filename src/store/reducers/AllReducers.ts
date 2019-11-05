import {combineReducers} from "redux";
import rowsReducer from "./rows-reducer";
import nameReducer from "./name-reducer";

const allReducers = combineReducers({
    rows: rowsReducer,
    name: nameReducer,
});

export default allReducers;
