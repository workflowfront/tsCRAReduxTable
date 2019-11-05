import * as React from 'react';
import {RowEditButtonProps} from "./types/RowEditButtonProps";
import {connect} from "react-redux";
import {editRow} from "../../store/actions/row-actions";
import {Button} from "react-bootstrap";

class RowEditButton extends React.Component<RowEditButtonProps, {}> {

    constructor(props: RowEditButtonProps, context: any) {
        super(props, context);
    }

    public handleClick = () => {
        console.log('получили id: ', this.props.id);
        this.onEditRow();
    }

    public render() {
        return (
            <Button bsStyle="warning" onClick={this.handleClick}>{this.props.saveAttr ? 'save' : 'edit'}</Button>
        )
    };

    public onEditRow = () => {
        this.props.onEditRow(this.props.id, this.props.saveAttr);
    }
}

const mapActionsToProps = {
    onEditRow: editRow
};

export default connect(undefined, mapActionsToProps)(RowEditButton);
