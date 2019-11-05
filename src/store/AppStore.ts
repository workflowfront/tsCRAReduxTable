import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Row} from "../model/Row";
import {Name} from "../model/Name";

export interface IAppState {
    rows: Row[],
    name: Name
}

const INITIAL_STATE: IAppState = {
    rows: [],
    name: {name: ""}
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };
