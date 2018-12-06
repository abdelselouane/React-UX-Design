import React from 'react';
import { HeaderCC, ListItemCC } from 'react-common-components';
import Prism from "prismjs";
import "../../prism.css";

class Cards extends React.Component {

    state = {
    };

    componentDidMount() {
        Prism.highlightAll();
    }

    render(){

        const listItemProps = {
            title: "Part #12345",
            data: [{
                brandName: 'Brand Name', 
                partDesc: 'Description',
                supplierName: 'Supplier Name',
                cost: '12' 
            }],
            columns: [{
              className: "col-lg-2",
              label: "Brand",
              key: "brandName"
            },
            {
              className: "col-lg-3",
              label: "Description",
              key: "partDesc"
            },
            {
              className: "col-lg-2",
              label: "Supplier",
              key: "supplierName"
            },
            {
              className: "col-lg-2",
              label: "Cost",
              key: "cost"
            },
            {
              className: "col-lg-3",
              actions: true
            }],
            actions: [{
              text: "Edit Part",
              className: "button md",
              onClick: () => { alert('Edit...') }
            }]
          };

        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Cards"/>
                    <div className="row start-md">
                        <div className="col-md-6">
                            <h2 className="border">List Item</h2>
                            <ListItemCC {...listItemProps} />
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ListItemCC } from 'react-common-components';

// 2. CREATE Props
const listItemProps = {
    title: "Part #12345",
    data: [{
        brandName: 'Brand Name', 
        partDesc: 'Description',
        supplierName: 'Supplier Name',
        cost: '12' 
    }],
    columns: [{
      className: "col-lg-2",
      label: "Brand",
      key: "brandName"
    },
    {
      className: "col-lg-3",
      label: "Description",
      key: "partDesc"
    },
    {
      className: "col-lg-2",
      label: "Supplier",
      key: "supplierName"
    },
    {
      className: "col-lg-2",
      label: "Cost",
      key: "cost"
    },
    {
      className: "col-lg-3",
      actions: true
    }],
    actions: [{
      text: "Edit Part",
      className: "button md",
      onClick: () => { alert('Edit...') }
    }]
  };

//3. Pass Props
<ListItemCC {...listItemProps} />
        `}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Cards