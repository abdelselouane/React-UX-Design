import React from 'react';
import { HeaderCC, TableCC } from 'react-common-components';
import Prism from "prismjs";
import "../../../prism.css";

class AlternativeRowsTable extends React.Component  {

    state = {
        data: [],
        dataColumns: []
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    componentWillMount(){
        //API DATA
        const  data = [{ 
            id: 4,
            firstname: 'zatest7',
            lastname: 'xest7'
        },
        { 
            id: 22,
            firstname: 'yest2',
            lastname: 'xest2'    
        },
        { 
            id: 13,
            firstname: 'test39',
            lastname: 'zest39'
        },
        { 
            id: 14,
            firstname: 'aest14',
            lastname: 'best14'
        },
        { 
            id: 5,
            firstname: 'cest5',
            lastname: 'dest5'
        }];

        this.setState({
            data,
            dataColumns: [
                {
                    key: 'id',
                    displayName: '#ID',
                    className: ''
                },
                {
                    key: 'firstname',
                    displayName: 'First Name',
                    className: ''
                },
                {
                    key: 'lastname',
                    displayName: 'Last Name',
                    className: ''
                }]
        });

    }


    render(){

        const { 
            data, 
            dataColumns
        } = this.state;

        const tableProps = {
            className: 'standard-table alternating-rows cc-standard-table', // Options: alternating-rows | vertical-lines 
            columns: dataColumns,
            rows: data
        }

        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Alternative Rows Table"/>
                    <div className="row">
                        <div className="col-12-md">
                            <TableCC {...tableProps}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { TableCC } from 'react-common-components';

// 2. CREATE Props
const dataColumns = [{
        key: 'id',
        displayName: 'id',
        className: ''
    },
    {
        key: 'firstname',
        displayName: 'firstname',
        className: ''
    },
    {
        key: 'lastname',
        displayName: 'lastname',
        className: ''
    }];

const  dataRows = [{ 
        id: 4,
        firstname: 'zatest7',
        lastname: 'xest7',
        props: { //Optional - additional row props can be added here
            onClick: () => { console.log('Row Clicked') }
        }
    },
    { 
        id: 22,
        firstname: 'yest2',
        lastname: 'xest2'    
    },
    { 
        id: 13,
        firstname: 'test39',
        lastname: 'zest39'
    },
    { 
        id: 14,
        firstname: 'aest14',
        lastname: 'best14'
    },
    { 
        id: 5,
        firstname: 'cest5',
        lastname: 'dest5'
    }];

    const tableProps = {
        className: 'standard-table cc-standard-table alternating-rows', 
        // Options: alternating-rows | vertical-lines 
        columns: dataColumns,
        rows: dataRows
    }
        
// 3. PASS Props
<TableCC {...tableProps}/>
        `}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AlternativeRowsTable;