import React from 'react';
import { HeaderCC, ModalCC } from 'react-common-components';
import Prism from "prismjs";
import "../../../prism.css";

class ActionsModal extends React.Component {

    state = {
        showActionsModal: false
      };

    componentDidMount() {
        Prism.highlightAll();
    }

    handleModalClose = () => {
        this.setState({
            showActionsModal: false
        });
    };

    handleOpenActionsModal = () => {
        this.setState({
            showActionsModal: true
        });
    }

    render(){

        const modalPropsActions = {
            id: "modalActions",
            toolBar: {
                title: 'Modal Title',
                type: '', // Optional: success | error | warning | information
                icon: '', 
                // Optional - 
                // success: icon_check-circle-outlined 
                // error:  icon_ban
                // warning: icon_warning-outlined
                // information: icon_information-outlined
            },
            show: this.state.showActionsModal,
            handleModalClose: this.handleModalClose,
            content: 'Sample modal content can be text or HTML.',
            actions: [{
              id: 'close',
              onClick: this.handleModalClose,
              className: 'md', // Optional: md | sm | disabled
              text: 'Cancel'
            },
            {
              id: 'save',
              onClick: () => { alert('Saving ...') },
              className: 'primary md',
              text: 'Save',
              primary: true //Optional: Set true for primary action
            }],
            styles: {
              width: '',
              height: ''
            }
          };



        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Modals"/>
                    <div className="row start-md">
                        <div className="col-md-6">
                            <h2 className="border">Modal with Actions</h2>
                            <div>
                                <button className="button primary" onClick={this.handleOpenActionsModal} >Open Modal</button>
                            </div>
                            <ModalCC {...modalPropsActions}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ModalCC } from 'react-common-components';

// 2. CREATE Props
const modalPropsActions = {
    id: "modalActions",
    toolBar: {
        title: 'Modal Title',
        type: '', // Optional: success | error | warning | information
        icon: '', 
        // Optional - 
        // success: icon_check-circle-outlined 
        // error:  icon_ban
        // warning: icon_warning-outlined
        // information: icon_information-outlined
    },
    show: this.state.showActionsModal,
    handleModalClose: this.handleModalClose,
    content: 'Sample modal content can be text or HTML.',
    actions: [{
      id: 'close',
      onClick: this.handleModalClose,
      className: 'md', // Optional: md | sm | disabled
      text: 'Cancel'
    },
    {
      id: 'save',
      onClick: () => { alert('Saving ...') },
      className: 'primary md',
      text: 'Save',
      primary: true //Optional: Set true for primary action
    }],
    styles: {
      width: '',
      height: ''
    }
  };
//3. PASS Props
<ModalCC {...modalPropsActions}/>
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

export default ActionsModal