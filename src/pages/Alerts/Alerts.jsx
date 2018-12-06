import React from 'react';
import { HeaderCC, BannerCC } from 'react-common-components';
import Prism from "prismjs";
import "../../prism.css";

class Alerts extends React.Component {

    state = {
        errorBannerShow: true,
        successBannerShow: true,
        informationBannerShow: true,
        warningBannerShow: true
    };

    componentDidMount() {
        Prism.highlightAll();
    }

    handleErrorBannerClose = () => {
        this.setState({
            errorBannerShow: false
        })
    }

    handleSuccessBannerClose = () => {
        this.setState({
            successBannerShow: false
        })
    }

    handleInformationBannerClose = () => {
        this.setState({
            informationBannerShow: false
        })
    }

    handleWarningBannerClose = () => {
        this.setState({
            warningBannerShow: false
        })
    }

    render(){

        const errorbannerProps = {
            show: this.state.errorBannerShow,
            type: 'error',
            message: 'Invalid: Please check the information that you provided and try again.',
            closeBanner: this.handleErrorBannerClose
        }

        const successbannerProps = {
            show: this.state.successBannerShow,
            type: 'success',
            message: 'Payment Received: Your payment was successfully processed for the order.',
            closeBanner: this.handleSuccessBannerClose
        }

        const informationbannerProps = {
            show: this.state.informationBannerShow,
            type: 'information',
            message: 'Information: For easier payment, offer customer Text2Confirm option.',
            closeBanner: this.handleInformationBannerClose
        }

        const warningbannerProps = {
            show: this.state.warningBannerShow,
            type: 'warning',
            message: 'Update: Application will be down during this weekend for an update.',
            closeBanner: this.handleWarningBannerClose
        }

        return (
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="content">
                    <HeaderCC title="Alerts"/>
                    <div className="row start-md">
                        <div className="col-md-6">
                            <h2 className="border">Success Banner</h2>
                            <BannerCC {...successbannerProps} />
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { BannerCC } from 'react-common-components';

// 2. CREATE Props
const successbannerProps = {
    show: this.state.successBannerShow,
    type: 'success',
    message: 'Payment Received: Your payment was successfully processed for the order.',
    closeBanner: this.handleSuccessBannerClose
}

//3. Pass Props
<Banner {...successbannerProps} />
        `}
                                </code>
                            </pre>
                        </div>
                        <div className="col-md-6">
                            <h2 className="border">Error Banner</h2>
                            <BannerCC {...errorbannerProps}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { BannerCC } from 'react-common-components';

// 2. CREATE Props
const errorbannerProps = {
    show: this.state.errorBannerShow,
    type: 'error',
    message: 'Invalid: Please check the information that you provided and try again.',
    closeBanner: this.handleErrorBannerClose
}

//3. Pass Props
<Banner {...errorbannerProps} />
        `}
                                </code>
                            </pre>
                        </div>                  
                    </div>
                    <div className="row start-md">
                        <div className="col-md-6">
                            <h2 className="border">Information Banner</h2>
                            <BannerCC {...informationbannerProps} />
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { BannerCC } from 'react-common-components';

// 2. CREATE Props
const informationbannerProps = {
    show: this.state.informationBannerShow,
    type: 'information',
    message: 'Information: For easier payment, offer customer Text2Confirm option.',
    closeBanner: this.handleInformationBannerClose
}

//3. Pass Props
<Banner {...informationbannerProps} />
        `}
                                </code>
                            </pre>
                        </div>
                        <div className="col-md-6">
                            <h2 className="border">Warning Banner</h2>
                            <BannerCC {...warningbannerProps}/>
                            <br/><br/>
                            <pre>
                                <code className="language-javascript">
        {`
// 1. IMPORT Component
import { BannerCC } from 'react-common-components';

// 2. CREATE Props
const warningbannerProps = {
    show: this.state.warningBannerShow,
    type: 'warning',
    message: 'Update: Application will be down during this weekend for an update.',
    closeBanner: this.handleWarningBannerClose
}

//3. Pass Props
<Banner {...warningbannerProps} />
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

export default Alerts