import React from 'react';
import { HeaderCC, ModalCC } from 'react-common-components';
import Prism from "prismjs";
import "../../../prism.css";

class SuccessModal extends React.Component {

    state = {
        showSuccessModal: false
      };

    componentDidMount() {
        Prism.highlightAll();
    }

    handleModalClose = () => {
        this.setState({
        showSuccessModal: false
        });
    };

    handleOpenSuccessModal = () => {
        this.setState({
            showSuccessModal: true
        });
    }

    render(){

        const modalPropsSuccess = {
            id: "successModal",
            toolBar: {
                title: 'Modal Title',
                type: 'success', // Optional: success | error | warning | information
                icon: 'icon_check-circle-outlined', 
                // Optional - 
                // success: icon_check-circle-outlined 
                // error:  icon_ban
                // warning: icon_warning-outlined
                // information: icon_information-outlined
            },
            show: this.state.showSuccessModal,
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
                            <h2 className="border">Success Modal</h2>
                            <div>
                                <button className="button primary" onClick={this.handleOpenSuccessModal} >Open Modal</button>
                            </div>
                            <ModalCC {...modalPropsSuccess}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ModalCC } from 'react-common-components';

// 2. CREATE Props
const modalPropsSuccess = {
    id: "successModal",
    toolBar: {
        title: 'Modal Title',
        type: 'success', // Optional: success | error | warning | information
        icon: 'icon_check-circle-outlined', 
        // Optional - 
        // success: icon_check-circle-outlined 
        // error:  icon_ban
        // warning: icon_warning-outlined
        // information: icon_information-outlined
    },
    show: this.state.showSuccessModal,
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
<ModalCC {...modalPropsSuccess}/>
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

export default SuccessModal