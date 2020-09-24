import React from 'react';
import RadioGroup from '@react/react-spectrum/RadioGroup';
import Radio from '@react/react-spectrum/Radio';
import SubscriptionsFormToBuy from './subscriptionsFormToBuy';
import {ActiveStateEnum} from './../constants';
import Button from "@react/react-spectrum/Button";
import PaymentDetails from './PaymentDetails';

class buyContainer extends React.Component{

    state = {
        activeState : ActiveStateEnum.SELECT_RADIO_GROUP_STEP,
        subscriptionChannel : null,
        subscriptionDays : 0
    };

    componentDidMount() {
    }

    handleStateChange = (evt) => {
        this.setState({subscriptionChannel : evt});
    }

    viewPrevStep = () => {
        let activeState = this.state.activeState;
        switch (activeState) {
            case ActiveStateEnum.SELECT_RADIO_GROUP_STEP :
                break;
            case ActiveStateEnum.SELECT_CONNECTION_STEP:
                this.setState({activeState: ActiveStateEnum.SELECT_RADIO_GROUP_STEP});
                break;
            case ActiveStateEnum.SELECT_PAYMENT_STEP:
                this.setState({activeState: ActiveStateEnum.SELECT_CONNECTION_STEP});
                break;
            case ActiveStateEnum.SELECT_EMAIL_STEP:
                this.setState({activeState: ActiveStateEnum.SELECT_PAYMENT_STEP});
                break;
            default:
                break;
        }
    }

    viewNextStep = () => {
        let activeSate = this.state.activeState;
        switch (activeSate) {
            case ActiveStateEnum.SELECT_RADIO_GROUP_STEP:
                this.setState({activeSate: ActiveStateEnum.SELECT_CONNECTION_STEP});
                break;
            case ActiveStateEnum.SELECT_CONNECTION_STEP:
                this.setState({activeSate: ActiveStateEnum.SELECT_PAYMENT_STEP});
                break;
            case ActiveStateEnum.SELECT_PAYMENT_STEP:
                this.setState({activeSate: ActiveStateEnum.SELECT_EMAIL_STEP});
                break;
            case ActiveStateEnum.SELECT_EMAIL_STEP:
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <h2> Fill up the details for the buyers </h2>
                <hr />
                {this.state.activeState === ActiveStateEnum.SELECT_RADIO_GROUP_STEP ?
                    <div className="radioGroup">
                        <RadioGroup name="radio-group" onChange={e => this.handleStateChange(e)}>
                            <Radio label="Netflix" value="netflix" />
                            <Radio label="Hotstar" value="hotstar" />
                            <Radio label="Sony Liv" value="sonyLiv" />
                            <Radio label="Zee5" value="zee5" />
                        </RadioGroup>
                    </div> : <div />}
                {this.state.activeState === ActiveStateEnum.SELECT_CONNECTION_STEP ?
                    <div className="subscriptionsForm">
                        <SubscriptionsFormToBuy subscriptionChannelName={this.state.subscriptionChannel}/>
                    </div> : <div />}
                { this.state.activeState === ActiveStateEnum.SELECT_PAYMENT_STEP ?
                    <div className="paymentOptions">
                        <PaymentDetails />
                    </div> : <div />}
                <div>
                    <Button variant={'action'} disabled={this.state.activeState===ActiveStateEnum.SELECT_RADIO_GROUP_STEP}
                            onClick={this.viewPrevStep}> Go one Step Back </Button>
                    <Button variant={'action'} disabled={this.state.activeState===ActiveStateEnum.SELECT_EMAIL_STEP}
                            onClick={alert('show message')}> Go One Step Forward </Button>
                </div>
            </div>
        );
    }

}

export default buyContainer;