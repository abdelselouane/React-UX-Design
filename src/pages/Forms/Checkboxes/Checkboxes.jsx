import React from 'react';
import { CheckboxCC } from 'react-common-components';

const Checkboxes = ({ checkboxProps }) => (
    <div className="row start-md">
        <div className="col-md-6">
            <h2 className="border">Checkbox Field</h2>
            <CheckboxCC {...checkboxProps} />
        </div>
        <div className="col-md-6">
            <br/><br/>
        <pre>
            <code className="language-javascript">
            {`
    // 1. IMPORT Component
    import { CheckboxCC } from 'react-common-components';

    // 2. CREATE Props
    const checkboxProps = { 
    id:'checkbox', // Required
    checked: this.state.selectedCheckbox, 
    // Required Bool: Should be set in the state
    label:'Checkbox Label', // Required
    handleCheckedItem: this.handleCheckedItem // Required: Func
    }

    // 3. PASS Props
    <CheckboxCC {...checkboxProps} />
            `}
            </code>
            </pre>
        </div>
    </div>
);

export default Checkboxes;