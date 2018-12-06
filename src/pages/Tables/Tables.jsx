import React from 'react';
import { HeaderCC, TableCC, CheckboxCC, CheckboxTableCC} from 'react-common-components';
import Prism from "prismjs";
import "../../prism.css";

class Tables extends React.Component  {

    state = {
        checkAll: false,
        data: [],
        dataColumns: [],
        selectedCheckboxes: []
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

        let initialCheckboxesState = [];
        data.map((item, index)=> {
            this.state.selectedCheckboxes.push({
                key: `checkbox-${index}`,
                check: false
            });
            initialCheckboxesState = this.state.selectedCheckboxes;
        });

        const checkboxAll= { 
            id:'checkboxAll',
            checked: this.state.checkAll,
            label:'', 
            handleCheckedItem: this.handleCheckboxAll
        }

        this.setState({
            selectedCheckboxes: initialCheckboxesState,
            data,
            dataColumns: [
                {
                    key: 'checkbox',
                    displayName: <CheckboxCC {...checkboxAll} />,
                    className: 'checkbox-column'
                },
                {
                    key: 'id',
                    displayName: '#ID',
                    className: '',/* sortable 2 icons, sorted is bgcolor, ascending icon up, descending icon down */
                    sortable: true,
                    orderBy: {
                        key: 'id',
                        className: ''
                    },
                    handleSortable: this.handleSortable
                },
                {
                    key: 'firstname',
                    displayName: 'First Name',
                    className: '',
                    sortable: true,
                    orderBy: {
                        key: 'firstname',
                        className: ''
                    },
                    handleSortable: this.handleSortable
                },
                {
                    key: 'lastname',
                    displayName: 'Last Name',
                    className: '',
                    sortable: true,
                    orderBy: {
                        key: 'lastname',
                        className: ''
                    },
                    handleSortable: this.handleSortable
                }]
        });

    }


    handleSortable = (column) => {
        const { 
            data,
            dataColumns
        } = this.state;


        let sort = '';
        dataColumns.map((col) => {
            if(col.key === column){
                if(col.orderBy.className === '' || col.orderBy.className === 'descending'){
                    col.orderBy.className = 'ascending';
                    sort = 'ascending';
                } else {
                    col.orderBy.className = 'descending';
                    sort = 'descending';
                }
            }
        });

        data.sort(function (a, b) {
            if(sort === 'ascending'){
                if(typeof(a[column]) === 'number'){
                    return a[column] - b[column];
                } else {
                    let nameA = a[column].toUpperCase(); // ignore upper and lowercase
                    let nameB = b[column].toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                }
            } else {
                if(typeof(a[column]) === 'number') {
                    return b[column] - a[column];
                } else {
                    let nameA = a[column].toUpperCase(); // ignore upper and lowercase
                    let nameB = b[column].toUpperCase(); // ignore upper and lowercase
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                }
            }

        });

        this.setState({
            data,
            dataColumns
        })
    }

    handleCheckedItem = (id) => {
        let counter = 0;
        this.setState({
            selectedCheckboxes: this.state.selectedCheckboxes.map(item => {
                if(id === item.key) {
                    item.check = !item.check;
                }
                if(item.check) 
                    counter++;
                return item;
            })
        });
        
        if(this.state.selectedCheckboxes.length === counter){
            this.handleCheckboxAll();
        } else {
            this.setState({
                checkAll : false
            });
            this.updateColumns(false);
        }
    }

    updateColumns = (allChecked) => {
        const checkboxAll= { 
            id:'checkboxAll', 
            checked: allChecked,
            label:'', 
            handleCheckedItem: this.handleCheckboxAll
        }

        this.state.dataColumns.map( column => {
            if(column.key === 'checkbox'){
                column.displayName = <CheckboxCC {...checkboxAll} />
            }
            return column;
        });

        this.setState({
            dataColumns: this.state.dataColumns
        });
    }

    handleCheckboxAll = () => {

        this.updateColumns(!this.state.checkAll);
        this.setState({
            checkAll : !this.state.checkAll,
            selectedCheckboxes: this.state.selectedCheckboxes.map(item => {
                item.check = !this.state.checkAll;
                return item;
            })
        });
    }

    render(){

        const { 
            data, 
            dataColumns,
            selectedCheckboxes
        } = this.state;
        
        const dataRows = data.map((item, index)=> {
            const checked = selectedCheckboxes.filter( selected => selected.key === `checkbox-${index}` );
            let checkboxProps = { 
                id:`checkbox-${index}`, 
                checked: checked[0],
                label:'', 
                handleCheckedItem: this.handleCheckedItem 
            }
            return {
                ...item,
                checkbox: <CheckboxTableCC {...checkboxProps}/>,
            }
        });

        const tableProps = {
            className: 'standard-table cc-standard-table', // Options: alternating-rows | vertical-lines 
            columns: dataColumns,
            rows: dataRows
        }

        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Tables"/>
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
import { TableCC, CheckboxCC, CheckboxTableCC } from 'react-common-components';

// 2. CREATE Props
const checkboxAll= { //Optional - when using checkboxes
    id:'checkboxAll',
    checked: this.state.checkAll,
    label:'', 
    handleCheckedItem: this.handleCheckboxAll
}

const dataColumns: [
    { //Optional Column - when using checkboxes
        key: 'checkbox',
        displayName: <CheckboxCC {...checkboxAll} />,
        className: 'checkbox-column'
    },
    {
        key: 'id',
        displayName: 'id',
        className: '',
        sortable: true, // Optional
        orderBy: { // Optional
            key: 'id',
            className: '' // ascending | descending
        },
        handleSortable: this.handleSortable // Optional
    },
    {
        key: 'firstname',
        displayName: 'firstname',
        className: '',
        sortable: true, // Optional
        orderBy: { // Optional
            key: 'id',
            className: ''
        },
        handleSortable: this.handleSortable // Optional
    },
    {
        key: 'lastname',
        displayName: 'lastname',
        className: ''
    }]
        `}
                                </code>
                            </pre>
                        </div>
                        <div className="col-md-6">
                                <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 3. PASS Props
render(){

const { 
    data, 
    dataColumns,
    selectedCheckboxes // Optional - if using checkboxes
} = this.state;

// Optional - If no data refactoring dataRows can be taken from an API call
const dataRows = data.map((item, index)=> { 
    const checked = selectedCheckboxes.filter( 
        selected => selected.key === 'checkbox-index' ); 
    //specify index
    let checkboxProps = { 
        id:'checkbox-index', //specify index
        checked: checked[0],
        label:'', 
        handleCheckedItem: this.handleCheckedItem 
    }
    return {
        ...item,
        checkbox: <CheckboxTableCC {...checkboxProps}/>,
    }
});

const tableProps = {
    className: 'standard-table cc-standard-table', 
    // Options: alternating-rows | vertical-lines 
    columns: dataColumns,
    rows: dataRows // If no rows refactoring data can be assigned directly
}

...
}

// 4. PASS Props
<CheckboxCC {...checkboxProps} />
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

export default Tables;