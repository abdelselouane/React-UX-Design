import React from 'react';

const Home = () => 
 (
    <React.Fragment>
        <div className="home-header">
            <h1>React Common Components</h1>
        </div>
        <div className="container-fluid" style={{marginTop: '40px'}}>
            <div className="content">
                <div className="row start-md">
                    <div className="col-md-3">
                        <h2 className="border">Navigation</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/breadcrumbs">Breadcrumbs</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/navbars">Navigation Bars</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/tabs">Tabs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="border">Forms</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/checkboxes">Checkboxes</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/checkboxesgroup">Checkboxes Group</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/dropdowns">Dropdowns</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/textinputs">Text Inputs</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/textareas">Text Area</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="border">Search</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/Search">Search Fields</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="border">Tables</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/standardtable">Standard Table </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/alternativerowstable">Alternative Rows Table </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/verticallinestable">Vertical Lines Table </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/tables">Checkboxes Table </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/tables">Sorting Table </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row start-md">
                    <div className="col-md-3">
                        <h2 className="border">Modals</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/standardmodal">Standard Modal</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/actionsmodal">Modal with Actions</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/successmodal">Success Modal</a>   
                                </li>
                                <li className="menu-item">
                                    <a href="/failuremodal">Failure Modal</a> 
                                </li>
                                <li className="menu-item">
                                    <a href="/warningmodal">Warning Modal</a> 
                                </li>
                                <li className="menu-item">
                                    <a href="/informationmodal">Information Modal</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="border">Alerts</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/alerts">Banners</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="border">Cards</h2>
                        <div className="menu-container">
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="/cards">List Item</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    
);

export default Home;