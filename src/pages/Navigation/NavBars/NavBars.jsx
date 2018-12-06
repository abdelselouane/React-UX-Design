
import React from 'react';
import { NavBarCC } from 'react-common-components';

const NavBars = () => {

    const headerProps = {
        style: {
            position: 'relative',
            zIndex: 0
        },
        info: {
            product: {
                text: 'React Common Components'
            },
            user: {
                text: 'Repair Team | SSC | Atlanta, GA'
            }
        },
        search: {
            show: true,
            input: {
                type: 'search',
                placeholder: 'Search Here',
                className: ''
            }
        },
        actions: [{
            className: 'icon_home',
            text: 'Home',
            path: '/navigation'
        },
        {
            className: 'icon_navigation',
            text: 'Navigation',
            path: '/navigation'
        }]
    };

    return (
        <div className="row start-md">
        <div className="col-md-12">
            <h2 className="border">Header</h2>
            <NavBarCC {...headerProps}/>
        </div>
        <div className="col-md-12">
            <pre>
                <code className="language-javascript">
{
`// 1.IMPORT component
import { NavBarCC } from 'react-common-components';

// 2.CREATE props
const headerProps = {
    style: {},// For extra styles - Optional
    info: {
        product: {//Header left title - Optional
            text: 'React Common Components'
        },
        user: {//Header left sub title - Optional
            text: 'Repair Team | SSC | Atlanta, GA'
        }
    },
    search: { 
        show: true,// show/hide search bar
        input: {
            type: 'search',
            placeholder: 'Search Here',
            className: ''
        }
    },
    actions: [{ //Navigation Items
        className: 'icon_home',//Required
        text: 'Home',//Required
        path: '/navigation'//Required
        },
        {
        className: 'icon_navigation',
        text: 'Navigation',
        path: '/navigation'
    }]
};

// 3. PASS props
<NavBarCC {...headerProps}/>

`}
                </code>
            </pre>
        </div>
    </div> 
   
    );
}

export default NavBars;