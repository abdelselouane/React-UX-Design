
import React from 'react';
import { InputFieldCC } from 'react-common-components';

const TextInputFields = () => {

const inputFieldProps = {
    field: {
        id: 'text-field',
        type: 'text',
        placeholder: 'Enter text here',
        className: ''
    },
    label: {
        text: 'Text Field'
    },
    error: {
        flag: false,
        msg: ''
    }
}

const inputFieldEmailProps = {
    field: {
        id: 'email-field',
        type: 'email',
        placeholder: 'Enter email here',
        className: ''
    },
    label: {
        text: 'Email Field'
    },
    error: {
        flag: false,
        msg: ''
    }
}

const inputFieldErrorProps = {
    field: {
        id: 'error-field',
        type: 'text',
        placeholder: 'Enter text here',
        className: ''
    },
    label: {
        text: 'Error Field'
    },
    error: {
        flag: true,
        msg: 'Error goes here...'
    }
}

    return (
        <div className="row start-md">
            <div className="col-md-6">
                <h2 className="border">Text Field</h2>
                <InputFieldCC {...inputFieldProps} />
                <InputFieldCC {...inputFieldEmailProps} />
                <InputFieldCC {...inputFieldErrorProps} />
            </div>
            <div className="col-md-6">
                <pre>
                    <code className="language-javascript">
{`
// 1. IMPORT component
import { InputFieldCC } from 'react-common-components';

// 2. CREATE props
const inputFieldProps = {
    field: { // you can add any <input prop here ...
        id: 'text-field',
        type: 'text', // Options: email, number, tel ... 
        placeholder: 'Enter text here',
        className: ''
        // Other props ...
    },
    label: {// Optional 
        text: 'Text Field'
    },
    error: {// Optional 
        flag: false,
        msg: ''
    }
}

// 1. PASS props 
<InputFieldCC {...inputFieldProps} />
`}
                    </code>
                </pre>
            </div>
        </div>);
}

export default TextInputFields;