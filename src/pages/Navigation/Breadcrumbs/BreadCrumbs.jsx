import React from 'react';
import { BreadcrumbCC } from 'react-common-components';

const Breadcrumbs = () => {

    const breadcrumbsNobackProps = {
        breadcrumbs: [{
            text: "Page 1",
            path: '/navigation'
        },
        {
            text: "Page 2",
            path: '/navigation'
        },
        {
            text: "Page 3",
            path: '/navigation'
        }]
    };

    const breadcrumbsProps = {
        breadcrumbs: [{
            text: "back",
            path: '/navigation'
        },
        {
            text: "Page 1",
            path: '/navigation'
        },
        {
            text: "Page 2",
            path: '/navigation'
        },
        {
            text: "Page 3",
            path: '/navigation'
        }]
    };

    return (
        <div className="row start-md">
            <div className="col-md-6">
                <h2 className="border">Standard Breadcrumb</h2>
                <BreadcrumbCC {...breadcrumbsNobackProps}/>
                <h2 className="border">Standard Breadcrumb Navigation with Back Button</h2>
                <BreadcrumbCC {...breadcrumbsProps}/>
            </div>
            <div className="col-md-6">
                
                <pre> 
                    <code className="language-javascript">
                    {`
// 1. IMPORT component
import { BreadcrumbCC } from 'react-common-components';

// 2. CREATE props 
const breadcrumbsProps = {
    breadcrumbs: [{
            text: "back", // Optional 
            path: '/navigation'
        },
        {
            text: "Page 1",
            path: '/navigation'
        },
        {
            text: "Page 2",
            path: '/navigation'
        },
        {
            text: "Page 3",
            path: '/navigation'
    }];

// 3. PASS props 
<BreadcrumbCC {...breadcrumbsProps}/>

                    `}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default Breadcrumbs;