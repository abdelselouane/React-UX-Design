import React from 'react';
import { HeaderCC } from 'react-common-components';
import SearchFields from './SearchFields/SearchFields';

import Prism from "prismjs";
import "../../prism.css";

class Search extends React.Component {

    state = {
        searchTerm: 'A12'
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const searchFieldProps = {
            input: {
                id: 'searchField',
                type: 'text',
                placeholder: "Enter search term here...",
                value: this.state.searchTerm,
                onChange: (event) => {
                    this.setState({
                        searchTerm: event.target.value
                    })
                }
            },
            action: {
                id: 'searchLink',
                onClick: () => {
                    if(this.state.searchTerm!==''){
                        alert(`
                        [{
                            item: 10,
                            text: 'EX: TEXT 10'
                        },{
                            item: 20,
                            text: 'EX: TEXT 20'
                        },{
                            item: 30,
                            text: 'EX: TEXT 30'
                        }]
                        `);
                    } else {
                        alert("Please enter a valid search term...")
                    }
                },
                text: "Search"
            },
            actionText: {
                text: 'Search',
                icon: <i className='icon_search'></i>
            },
            error: {
                flag: this.state.searchTerm==='' ? true : false,
                msg: 'Please enter a valid search term.'
            }
        };

        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Search"/>
                    <SearchFields searchFieldProps={searchFieldProps}/>
                </div>
            </div>);
    }

}

export default Search;