import * as React from 'react';
import {TableHeaderProps} from "./types/TableHeaderProps";
import './TableHeader.css';

class TableHeader extends React.Component<TableHeaderProps, {}> {

    constructor(props: TableHeaderProps, context: any) {
        super(props, context);
    }


    public render() {
        return (
            <h1 className="header">React typescript simple table {this.props.name}</h1>
        );
    }
}

export default TableHeader;
