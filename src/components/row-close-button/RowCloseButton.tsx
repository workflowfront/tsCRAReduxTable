import * as React from 'react';
import {RowCloseButtonProps} from "./types/RowCloseButtonProps";
import {connect} from "react-redux";
import {deleteRow} from "../../store/actions/row-actions";
import {Button} from "react-bootstrap";

class RowCloseButton extends React.Component<RowCloseButtonProps, {}> {

    constructor(props: RowCloseButtonProps, context: any) {
        super(props, context);
    }

    public handleClick = () => {
        console.log('получили id: ', this.props.id);
        this.onRemoveRow();
    }

    public render() {
        return (
            <Button bsStyle="danger" onClick={this.handleClick}>x</Button>
        )
    };

    public onRemoveRow = () => {
        this.props.onRemoveRow(this.props.id);
    }
}

const mapActionsToProps = {
    onRemoveRow: deleteRow
};

export default connect(undefined, mapActionsToProps)(RowCloseButton);
