import React from 'react';
import { TabsCC } from 'react-common-components';

const Tabs = () => {

    const tabProps = {
        id: 'tabs',
        className: '',
        tabs: [{
            id: 'name-1',
            text: 'Tab Link 1',
            content: (
                <React.Fragment>
                <h4>Tab Panel 1</h4>
                <p>Tab Content 1.1 </p>
                <p>Tab Content 1.2 </p>
                </React.Fragment>
            )
        },
        {
            id: 'name-2',
            text: 'Tab Link 2',
            content: (
                <React.Fragment>
                <h4>Tab Panel 2</h4>
                <p>Tab Content 2.1 </p>
                <p>Tab Content 2.2</p>
                </React.Fragment>
            )
        }]
    };

    return (
        <div className="row start-md">
            <div className="col-md-6">
                <h2 className="border">Tab Navigation</h2>
                <TabsCC {...tabProps} />
                <h2 className="border">Tab Navigation - Bordered</h2>
                <TabsCC {...tabProps} className={'tabs-bordered'} />
                <h2 className="border">Tab Navigation - Left</h2>
                <TabsCC {...tabProps} className={'tabs-vertical'}/>
                <h2 className="border">Tab Navigation - Left Bordered</h2>
                <TabsCC {...tabProps} className={'tabs-vertical-bordered'}/>
            </div>
            <div className="col-md-6">
            <br/><br/><br/>
                <pre> 
                <code className="language-javascript">
{`// 1. IMPORT component
import { TabsCC } from 'react-common-components';

// 2. CREATE props
const tabProps = {
    id: 'tabs',
    className: '', // - Use Options Below -
    //Tab Navigation: '', 
    //Tab Navigation - Bordered: 'tabs-bordered', 
    //Tab Navigation - Left: 'tabs-vertical', 
    //Tab Navigation - Left Bordered: 'tabs-vertical-bordered'
    tabs: [{
        id: 'name-1',
        text: 'Tab Link 1',
        content: (
            <React.Fragment>
            <h4>Tab Panel 1</h4>
            <p>Tab Content 1.1 </p>
            <p>Tab Content 1.2 </p>
            </React.Fragment>
        )
    },
    {
        id: 'name-2',
        text: 'Tab Link 2',
        content: (
            <React.Fragment>
            <h4>Tab Panel 2</h4>
            <p>Tab Content 2.1 </p>
            <p>Tab Content 2.2</p>
            </React.Fragment>
        )
    }]
};

// 3. PASS props
<TabsCC  {...tabProps} />

`}
                </code>
                </pre>
            </div>
        </div>
    );
}

export default Tabs;