import React from 'react';
import { HeaderCC, ModalCC } from 'react-common-components';
import Prism from "prismjs";
import "../../../prism.css";

class FailureModal extends React.Component {

    state = {
        showFailureModal: false
      };

    componentDidMount() {
        Prism.highlightAll();
    }

    handleModalClose = () => {
        this.setState({
            showFailureModal: false
        });
    };

    handleOpenFailureModal = () => {
        this.setState({
            showFailureModal: true
        });
    }

    render(){

        const modalPropsFailure = {
            id: "failureModal",
            toolBar: {
                title: 'Modal Title',
                type: 'error', // Optional: success | error | warning | information
                icon: 'icon_ban', 
                // Optional - 
                // success: icon_check-circle-outlined 
                // error:  icon_ban
                // warning: icon_warning-outlined
                // information: icon_information-outlined
            },
            show: this.state.showFailureModal,
            handleModalClose: this.handleModalClose,
            content: 'Sample modal content can be text or HTML.',
            actions: [{
              id: 'close',
              onClick: this.handleModalClose,
              className: 'md', // Optional: md | sm | disabled
              text: 'Ok'
            }]
          };


        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Modals"/>
                    <div className="row start-md">
                    <div className="col-md-6">
                            <h2 className="border">Failure Modal</h2>
                            <div>
                                <button className="button primary" onClick={this.handleOpenFailureModal} >Open Modal</button>
                            </div>
                            <ModalCC {...modalPropsFailure}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ModalCC } from 'react-common-components';

// 2. CREATE Props
const modalPropsFailure = {
    id: "failureModal",
    toolBar: {
        title: 'Modal Title',
        type: 'error', // Optional: success | error | warning | information
        icon: 'icon_ban', 
        // Optional - 
        // success: icon_check-circle-outlined 
        // error:  icon_ban
        // warning: icon_warning-outlined
        // information: icon_information-outlined
    },
    show: this.state.showFailureModal,
    handleModalClose: this.handleModalClose,
    content: 'Sample modal content can be text or HTML.',
    actions: [{
      id: 'close',
      onClick: this.handleModalClose,
      className: 'md', // Optional: md | sm | disabled
      text: 'Ok'
    }]
  };

//3. Pass Props
<ModalCC {...modalPropsFailure}/>
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

export default FailureModal