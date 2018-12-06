import React from 'react';
import { HeaderCC } from 'react-common-components';
import NavBars from './NavBars/NavBars';
import Breadcrumbs from './Breadcrumbs/BreadCrumbs';
import Tabs from './Tabs/Tabs';

import Prism from "prismjs";
import "../../prism.css";

class Navigation extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Navigation"/>
                    <NavBars />
                    <Breadcrumbs />
                    <Tabs />
                </div>
                <br/><br/>
            </div>
        );
    }

}
export default Navigation;