import TableHeader from '../table-header/TableHeader';
import * as React from 'react';
import './App.css';
import TableSimple from "../table-simple/TableSimple";
import {IState} from "./types/StateType";
import {PropsType} from "./types/PropsType";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import {default as RowForm} from "../row-form/RowForm";
import NameForm from "../name-form/NameForm";

class App extends React.Component<PropsType, IState> {

    constructor(props: PropsType, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div className="App">
                <TableHeader name={this.props.name}/>
                <RowForm/>
                <br/>
                <NameForm/>
                <br/>
                <TableSimple rows={this.props.rows}/>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    rows: state.rows,
    name: state.name.name
})

export default connect(mapStateToProps)(App);
