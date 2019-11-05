import * as React from 'react';
import {TableSimpleProps} from "./types/TableSimpleProps";
import {TableSimpleState} from './types/TableSimpleState';
import {DebounceInput} from 'react-debounce-input';
import {Row} from "../../model/Row";
import RowCloseButton from "../row-close-button/RowCloseButton";
import {Grid, Table} from "react-bootstrap";
import RowEditButton from "../row-edit-button/RowEditButton";

const keysColumn: string[] = ['id', 'name', 'description', 'someData'];

class TableSimple extends React.Component<TableSimpleProps, TableSimpleState> {

  public static getDerivedStateFromProps(nextProps: TableSimpleProps, prevState: TableSimpleState): any{
    if(nextProps.rows!==prevState.data){
      return { data: nextProps.rows};
    }
    else {
      return null;
    }
  }

    constructor(props: TableSimpleProps, context: any) {
        super(props, context);
        this.state = { data: [],
                       filterText: ''};
    }

   public componentDidUpdate(prevProps: any, prevState: TableSimpleState): void {
    if(prevProps.rows!==this.props.rows){
      this.setState({data: this.props.rows});
    }
  }

  public onSort(e: any, sortKey: string): void {
      const data = this.state.data;
      data.sort((a: Row, b: Row): any => {
        return a[sortKey].localeCompare(b[sortKey])
      });
      this.setState({data})
    }


  public  handleUserInput(e: any): void {
    const filterTextVal: string = e.target.value;
    const key = e.target.name;
    const filterText = {};
    filterText[key] = filterTextVal;
     this.setState(old=>({ filterText }));
  };

    public render() {
     let results: Row[] = this.state.data ? this.state.data : this.props.rows;
      const filterObj = this.state.filterText;
      if ( typeof (filterObj) === 'object') {
        for (const prop of Object.keys(filterObj)) {
          results = this.state.data.filter((it: Row): any => {
            if (it[prop].indexOf(this.state.filterText[prop]) !== -1) {
              return it;
            }
          });
        }
      }
      console.log('res', results);
        return (
            <Grid>
                <Table striped={true} bordered={true} hover={true}>
                    <thead>
                      <tr>
                         {keysColumn.map((it: string, idx: number) => {
                           return (<React.Fragment key={idx}>
                                     <th  onClick={(e) => this.onSort(e,it)}>
                                       it
                                     </th>
                                   </React.Fragment>)
                           })
                         }
                         <th>Действия</th>
                        </tr>
                        <tr>
                          {keysColumn.map((it: string, idx: number) => {
                            return (<React.Fragment key={idx}>
                              <th  key={idx}>
                                <DebounceInput type='text'
                                               name={it}
                                               value={this.state.filterText!== ''? this.state.filterText[it] :''}
                                               onChange={(e) => this.handleUserInput(e)}/>
                              </th>
                            </React.Fragment>)
                            })
                          }
                          <th>{null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows(results) }
                    </tbody>
                </Table>
            </Grid>
        )
    };

    public renderRows = (results: Row[]) => {
      const rowsData: Row[] = results;
        return rowsData.map((row: Row, index: number) => {
            return (
                <tr key={`${index}${row.name}`}>
                    <td>{ index }</td>
                    <td>{ row.name }</td>
                    <td>{ row.description}</td>
                    <td>{ row.someData}</td>
                    <td>
                        <RowEditButton id={row.id}/>
                        <RowCloseButton id={row.id}/>
                    </td>
                </tr>
            );
        });
    }
}

export default TableSimple;
