import React from 'react';
import { CheckboxGroupCC } from 'react-common-components';

const CheckboxesGroup = ({ checkboxGroupProps }) => (
    <div className="row start-md">
        <div className="col-md-6">
            <h2 className="border">Vertical Checkbox Group</h2>
            <CheckboxGroupCC {...checkboxGroupProps}/>
        </div>
        <div className="col-md-6">
            <br/><br/>
        <pre>
            <code className="language-javascript">
            {`
    // 1. IMPORT Component
    import { CheckboxCC } from 'react-common-components';

    // 2. SET state CREATE Props
    state = {
        //checkbox group
        selectAll: false,
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
        }]
    }

    handleCheckedGroupItems = (event) => {
        const { checkBoxesGroup } = this.state;
        checkBoxesGroup.map((checkbox) => {
            if('cond-{checkbox.id}' === event.target.id){
                checkbox.checked = !checkbox.checked
            }
        });
        const selectedCount = checkBoxesGroup.filter( checkbox => checkbox.checked === true );
        this.setState({
            selectAll: selectedCount.length === 4 ? 'true' 
            : selectedCount.length === 0 ? 'false' : 'mixed',
        }); 
    }

    const checkboxGroupProps = { 
        id:'checkboxGroup',
        selectAll: this.state.selectAll, 
        group: this.state.checkBoxesGroup,
        handleCheckedGroupItems: this.handleCheckedGroupItems 
    }

    // 3. PASS Props
    <CheckboxCC {...checkboxGroupProps} />
            `}
            </code>
            </pre>
        </div>
    </div>
);

export default CheckboxesGroup;