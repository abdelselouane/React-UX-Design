import React from 'react';
import { HeaderCC } from 'react-common-components';
import TextInputFields from './TextInputFields/TextInputFields';
import TextAreaFields from './TextAreaFields/TextAreaFields';
import Dropdowns from './Dropdowns/Dropdowns';
import Checkboxes from './Checkboxes/Checkboxes';

import Prism from "prismjs";
import "../../prism.css";

class Forms extends React.Component {

    state = {
        selectedItem: {
            id: 1,
            value: 'Item1',
            option: 'Item1'
        },
        dropdownOpen: false,
        selectedCheckbox: false
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    handleSelectedItem = (event) => {
        this.setState({
          selectedItem: {
            id: parseInt(event.target.value),
            value: event.target.id,
            option: event.target.title
          }
        });
        this.handleDropdownClose();
    }

    handleDropdownClose = () => {
        this.setState({
          dropdownOpen: false
        });
    }

    handleDropdownOpen = () => {
        this.setState({
          dropdownOpen: true
        });
    }

    handleCheckedItem = () => {
        this.setState({
            selectedCheckbox: !this.state.selectedCheckbox
        });
    }

    handleSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleSearch() {
        if (this.state.searchTerm!==''){
          alert('Searching now ...');
        }
    }

render() {

const dropdownProps = {
    id: 'dropDown',
    label: 'Optional Label',
    dropdownOpen: this.state.dropdownOpen,//Should be set in the state
    selectedItem: this.state.selectedItem,//Should be set in the state
    handleSelectedItem: this.handleSelectedItem,
    handleDropdownClose: this.handleDropdownClose,
    handleDropdownOpen: this.handleDropdownOpen,
    items: [{
        id: 0,
        value: '',
        option: 'Optional Placeholder'
    },
    {
        id: 1,
        value: 'Item1',
        option: 'Item1'
    },
    {
        id: 2,
        value: 'Item2',
        option: 'Item2'
    },
    {
        id: 3,
        value: 'Item3',
        option: 'Item3'
    }]
}

const checkboxProps = { 
    id:'checkbox', 
    checked: this.state.selectedCheckbox, 
    label:'Checkbox Label', 
    handleCheckedItem: this.handleCheckedItem 
}

return (
    <div className="container-fluid" style={{marginTop: '100px'}}>
        <div className="content">
            <HeaderCC title="Forms"/>
            <TextInputFields />
            <TextAreaFields />
            <Dropdowns dropdownProps={dropdownProps} />
            <Checkboxes checkboxProps={checkboxProps} />
        </div>
    </div>);
}

}

export default Forms;