
import React from 'react';
import { DropDownCC } from 'react-common-components';

const Dropdowns = ({ dropdownProps }) => (
<div className="row start-md">
    <div className="col-md-4">
        <br/>
        <h2 className="border">Dropdown Field</h2>
        <DropDownCC {...dropdownProps} />
        <br/><br/>
    </div>
    <div className="col-md-4">
        <br/>
        <h2 className="border">Dropdown Field Invalid</h2>
        <DropDownCC {...dropdownProps} invalid={true} invalidMsg="Error goes here..." />
        <br/><br/>
    </div>
    <div className="col-md-4">
        <br/>
        <h2 className="border">Dropdown Field Disabled</h2>
        <DropDownCC {...dropdownProps} disabled={true} handleDropdownOpen={()=>{}} id="disabled"/>
        <br/><br/>
    </div>
    <div className="col-md-6">
        <pre>
            <code className="language-javascript">
{`
    // 1. IMPORT component
    import { DropDownCC } from 'react-common-components';

    // 2. SET THE STATE & OTHER METHODS
    state = {
        selectedItem: {
            id: 1,
            value: 'Item1',
            option: 'Item1'
        },
        dropdownOpen: false
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
`}
            </code>
        </pre>
        </div>
        <div className="col-md-6">
        <pre>
            <code className="language-javascript">

{`
    // 3. CREATE props
    const dropdownProps = {
        id: 'dropDown',//Required
        label: '', //Optional
        dropdownOpen: this.state.dropdownOpen,
        invalid: false, //Optional Bool,
        invalidMsg: '',
        disabled: false, //Optional Bool
        //Required Boolean: Should be set in the state
        selectedItem: this.state.selectedItem,
        //Required Object[Item]: Should be set in the state
        handleSelectedItem: this.handleSelectedItem,
        //Required Func: Should be set in parent component
        handleDropdownOpen: this.handleDropdownOpen,
        //Required Func: Should be set in parent component
        items: [{,//Required
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

    // 4. PASS props 
    <DropDownCC {...dropdownProps} />
`}
            </code>
        </pre>
    </div>
</div>);

export default Dropdowns;