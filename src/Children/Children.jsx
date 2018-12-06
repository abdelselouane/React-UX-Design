import React from 'react';
import Tabs from './../Pages/Navigation/Tabs/Tabs';
import Breadcrumbs from './../Pages/Navigation/Breadcrumbs/BreadCrumbs';
import NavBars from './../Pages/Navigation/NavBars/NavBars';
import TextInputFields from './../Pages/Forms/TextInputFields/TextInputFields'
import TextAreaFields from './../Pages/Forms/TextAreaFields/TextAreaFields';
import Checkboxes from './../Pages/Forms/Checkboxes/Checkboxes';
import Dropdowns from './../Pages/Forms/Dropdowns/Dropdowns';
import CheckboxesGroup from './../Pages/Forms/CheckboxesGroup/CheckbpxesGroup';

class Children extends React.Component {

    state = {
        selectedItem: {
            id: 1,
            value: 'Item1',
            option: 'Item1'
        },
        dropdownOpen: false,
        selectedCheckbox: 'false',
        //checkbox group
        selectAllState: false,
        checkBoxesGroup: [{
            id: 'cond1',
            checked: false,
            label: 'Value Option 1'
        },
        {
            id: 'cond2',
            checked: false,
            label: 'Value Option 2'
        },
        {
            id: 'cond3',
            checked: false,
            label: 'Value Option 3'
        },
        {
            id: 'cond4',
            checked: false,
            label: 'Value Option 4'
        }],
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

    handleCheckedGroupItems = (event) => {
        const { checkBoxesGroup } = this.state;
        checkBoxesGroup.map((checkbox) => {
            if(`cond-${checkbox.id}` === event.target.id){
                checkbox.checked = !checkbox.checked
            }
        });
        const selectedCount = checkBoxesGroup.filter( checkbox => checkbox.checked === true );
        this.setState({
            selectAllState: selectedCount.length === 4 ? 'true' : selectedCount.length === 0 ? 'false' : 'mixed',
        }); 
    }

    handleSelectAll = (event) => {
        console.log(event.target);
        const { checkBoxesGroup } = this.state;
        checkBoxesGroup.map((checkbox) => {
           checkbox.checked = true
        });
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

        const checkboxGroupProps = { 
            id:'checkboxGroup',
            selectAllState: this.state.selectAllState,
            group: this.state.checkBoxesGroup,
            handleSelectAll: this.handleSelectAll,
            handleCheckedGroupItems: this.handleCheckedGroupItems 
        }

        const { match } = this.props
        let component;
        switch(match.params.id){
            case 'tabs': 
                component = <Tabs /> 
            break;
            case 'breadcrumbs': 
                component = <Breadcrumbs /> 
            break;
            case 'navbars': 
                component = <NavBars /> 
            break;
            case 'checkboxes':
                component = <Checkboxes checkboxProps={checkboxProps} />  
            break;
            case 'checkboxesgroup':
                component = <CheckboxesGroup checkboxGroupProps={checkboxGroupProps} />  
            break;
            case 'textinputs':
                component = <TextInputFields />
            break;
            case 'textareas':
                component = <TextAreaFields />
            break;
            case 'dropdowns':
                component = <Dropdowns dropdownProps={dropdownProps}/>
            break;
        }
        return (
        <div className="container-fluid" style={{marginTop: '100px'}}>
            <div className="content">
             {component}
            </div>
        </div>
        );
    }
  
}

export default Children;