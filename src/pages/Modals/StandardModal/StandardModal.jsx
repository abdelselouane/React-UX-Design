import React from 'react';
import { HeaderCC, ModalCC } from 'react-common-components';
import Prism from "prismjs";
import "../../../prism.css";

class StandardModal extends React.Component {

    state = {
        showStandardModal: false
      };

    componentDidMount() {
        Prism.highlightAll();
    }

    handleModalClose = () => {
        this.setState({
            showStandardModal: false
        });
    };

    handleOpenStandardModal = () => {
        this.setState({
            showStandardModal: true
        });
    }

    render(){

        const modalPropsStandard = {
            id: "modalStandard",
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
            show: this.state.showStandardModal,
            handleModalClose: this.handleModalClose,
            content: 'Sample modal content can be text or HTML.',
            styles: { //Optional: Set Modal width and height if necessary
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
                            <h2 className="border">Standard Modal</h2>
                            <div>
                                <button className="button primary" onClick={this.handleOpenStandardModal} >Open Modal</button>
                            </div>
                            <ModalCC {...modalPropsStandard}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ModalCC } from 'react-common-components';

// 2. CREATE Props
const modalPropsStandard = {
    id: "modalStandard",
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
    show: this.state.showStandardModal,
    handleModalClose: this.handleModalClose,
    content: 'Sample modal content can be text or HTML.',
    styles: { //Optional: Set Modal width and height if necessary
      width: '',
      height: ''
    }
  };

//3. Pass Props
<ModalCC {...modalPropsStandard}/>
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

export default StandardModal