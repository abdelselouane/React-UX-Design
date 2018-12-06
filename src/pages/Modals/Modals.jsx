import React from 'react';
import { HeaderCC, ModalCC } from 'react-common-components';
import Prism from "prismjs";
import "../../prism.css";

class Modals extends React.Component {

    state = {
        showStandardModal: false,
        showActionsModal: false,
        showSuccessModal: false,  
        showFailureModal: false,
        showWarningModal: false,
        showInformationModal: false
      };

    componentDidMount() {
        Prism.highlightAll();
    }

    handleModalClose = () => {
        this.setState({
            showStandardModal: false,
            showActionsModal: false,
            showSuccessModal: false,
            showFailureModal: false,
            showWarningModal: false,
            showInformationModal: false
        });
    };

    handleOpenStandardModal = () => {
        this.setState({
            showStandardModal: true
        });
    }

    handleOpenActionsModal = () => {
        this.setState({
            showActionsModal: true
        });
    }

    handleOpenSuccessModal = () => {
        this.setState({
            showSuccessModal: true
        });
    }
    
    handleOpenFailureModal = () => {
        this.setState({
            showFailureModal: true
        });
    }

    handleOpenWarningModal = () => {
        this.setState({
            showWarningModal: true
        });
    }

    handleOpenInformationModal = () => {
        this.setState({
            showInformationModal: true
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

          const modalPropsSuccess = {
            id: "modalPropsSuccess",
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

          const modalPropsFailure = {
            id: "modalPropsFailure",
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

          const modalPropsWarning = {
            id: "modalPropsWarning",
            toolBar: {
                title: 'Modal Title',
                type: 'warning', // Optional: success | error | warning | information
                icon: 'icon_warning-outlined', 
                // Optional - 
                // success: icon_check-circle-outlined 
                // error:  icon_ban
                // warning: icon_warning-outlined
                // information: icon_information-outlined
            },
            show: this.state.showWarningModal,
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

          const modalPropsInformation = {
            id: "modalPropsInformation",
            toolBar: {
                title: 'Modal Title',
                type: 'information', // Optional: success | error | warning | information
                icon: 'icon_information-outlined', 
                // Optional - 
                // success: icon_check-circle-outlined 
                // error:  icon_ban
                // warning: icon_warning-outlined
                // information: icon_information-outlined
            },
            show: this.state.showInformationModal,
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
    id: "modalPropsSuccess",
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
  

//3. Pass Props
<ModalCC {...modalPropsSuccess}/>
        `}
                                </code>
                            </pre>
                        </div>
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
    id: "modalPropsFailure",
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
<ModalCC {...modalPropsFailure}/>
        `}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="row start-md">
                        <div className="col-md-6">
                            <h2 className="border"> Warning Modal</h2>
                            <div>
                                <button className="button primary" onClick={this.handleOpenWarningModal} >Open Modal</button>
                            </div>
                            <ModalCC {...modalPropsWarning}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ModalCC } from 'react-common-components';

// 2. CREATE Props
const modalPropsWarning = {
    id: "modalPropsWarning",
    toolBar: {
        title: 'Modal Title',
        type: 'warning', // Optional: success | error | warning | information
        icon: 'icon_warning-outlined', 
        // Optional - 
        // success: icon_check-circle-outlined 
        // error:  icon_ban
        // warning: icon_warning-outlined
        // information: icon_information-outlined
    },
    show: this.state.showWarningModal,
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


//3. Pass Props
<ModalCC {...modalPropsWarning}/>
        `}
                                </code>
                            </pre>
                        </div>
                        <div className="col-md-6">
                            <h2 className="border">Information Modal</h2>
                            <div>
                                <button className="button primary" onClick={this.handleOpenInformationModal} >Open Modal</button>
                            </div>
                            <ModalCC {...modalPropsInformation}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { ModalCC } from 'react-common-components';

// 2. CREATE Props
const modalPropsInformation = {
    id: "modalPropsInformation",
    toolBar: {
        title: 'Modal Title',
        type: 'information', // Optional: success | error | warning | information
        icon: 'icon_information-outlined', 
        // Optional - 
        // success: icon_check-circle-outlined 
        // error:  icon_ban
        // warning: icon_warning-outlined
        // information: icon_information-outlined
    },
    show: this.state.showInformationModal,
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
<ModalCC {...modalPropsInformation}/>
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

export default Modals