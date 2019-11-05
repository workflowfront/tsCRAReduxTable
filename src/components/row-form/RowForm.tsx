import * as React from 'react';
import './RowForm.css';
import {RowFormState} from "./types/RowFormState";
import { addRow } from "../../store/actions/row-actions";
import {connect} from "react-redux";
import {RowFormProps} from "./types/RowFormProps";
import {Button, Col, Grid, Row} from "react-bootstrap";

class RowForm extends React.Component<RowFormProps, RowFormState> {

    constructor(props: RowFormProps, context: any) {
        super(props, context);
        this.state = {
            currentRow: "",
            nextRowId: 0
        }
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid>
                    <Row>
                        <Col sm={6} xs={12}>
                <input className="form-input" type="text" placeholder="Введите имя ряда"
                       onChange={this.inputChange} value={ this.state.currentRow }/>
                        </Col>
                        <Col sm={6} xs={12}>
                            <Button bsStyle="info" type="submit">Добавить ряд</Button>
                        </Col>
                    </Row>
                </Grid>
            </form>
            )
    }


    private onAddRow() {
        this.props.onAddRow({
            id: this.state.nextRowId,
            name: this.state.currentRow,
            description: `${this.state.currentRow} некое описание`,
            someData: `${this.state.currentRow} некие данные`,
        });
        this.updateStateOnSubmit();
    }

    private updateStateOnSubmit() {
        this.setState({
            currentRow: "",
            nextRowId: this.state.nextRowId + 1
        })
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) :void => {
        e.preventDefault();
        this.onAddRow();
    }


    private inputChange = (e: any) => {
        this.setState({
            currentRow: e.target.value,
        });
    }
}

const mapActionsToProps = {
    onAddRow: addRow
};

export default connect(undefined, mapActionsToProps)(RowForm);
