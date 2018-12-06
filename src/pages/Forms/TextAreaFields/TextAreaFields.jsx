
import React from 'react';
import { TextAreaCC } from 'react-common-components';

const TextAreaFields = ( ) => {
    
    const textAreaProps = {
        field: { // you can add any <textarea prop here ...
            id: 'text-field',
            defaultValue: 'Enter text here',
            className: ''
            // Other props ...
        },
        label: {// Optional 
            text: 'Text Field'
        },
        content: '',
        error: {// Optional 
            flag: false,
            msg: ''
        },
        textLength: 200
    }

    return (
        <div className="row start-md">
            <div className="col-md-6">
                <h2 className="border">Text Area Field</h2>
                <TextAreaCC { ...textAreaProps } />
                <TextAreaCC {...textAreaProps} error={{flag: true, msg: 'Error goes here...'}} />
                
            </div>
            <div className="col-md-6">
            <pre>
                <code className="language-javascript">
        {`
        // 1. IMPORT component
        import { TextAreaCC } from 'react-common-components';

        // 2. CREATE props
        const textAreaProps = {
        field: { // you can add any <input prop here ...
        id: 'text-field',
        defaultValue: 'Enter text here',
        value: '',
        className: ''
        // Other props ...
        },
        label: {// Optional 
        text: 'Text Field'
        },
        content: '',
        error: {// Optional 
        flag: false,
        msg: ''
        },
        textLength: 200
        }

        // 1. PASS props 
        <InputFieldCC {...textAreaProps} />
        `}
                </code>
            </pre>
            </div>
        </div>);
}

export default TextAreaFields; 