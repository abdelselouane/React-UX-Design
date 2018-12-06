import React from 'react';
import { SearchFieldCC } from 'react-common-components';

const SearchFields = ({searchFieldProps}) => {

    return (
    <div className="row start-md">
        <div className="col-md-6">
            <h2 className="border">Search Fields</h2>
            <SearchFieldCC {...searchFieldProps} />
            <SearchFieldCC {...searchFieldProps} actionText={
            {text: 'Search'}
        }/>
        </div>
        <div className="col-md-6">
            <br/><br/>
        <pre>
            <code className="language-javascript">
            {`
// 1. IMPORT Component
import { SearchFieldCC } from 'react-common-components';

// 2. CREATE Props
const searchFieldProps = {
    input: {
        id: 'searchField',
        type: 'text',
        placeholder: "Enter search term here...",
        value: '',// String
        onChange: () => {}// Func: Set state on change
    },
    action: {
        id: 'searchLink',
        onClick: () => {},// Func: Fetch items on click
        text: "Search"
    },
    actionText: {
        text: 'Search',//Optional
        icon: <i className='icon_search'></i>//Optional
    },
    error: {
        flag: false,
        msg: ''
    }
};

// 3. PASS Props
<SearchFieldCC {...searchFieldProps} />
            `}
            </code>
            </pre>
        </div>
    </div>
);}

export default SearchFields;