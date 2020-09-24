import React from 'react';
import RadioGroup from '@react/react-spectrum/RadioGroup';
import Radio from '@react/react-spectrum/Radio';
import SubscriptionsFormToBuy from './subscriptionsFormToBuy';
import StepList, {Step} from '@react/react-spectrum/StepList';
//import {Step} from '@react/react-spectrum/Step';

class buyContainer extends React.Component{

    state = {
        subscriptionChannel : null,
        subscriptionDays : 0
    };

    handleStateChange = (evt) => {
        this.setState({subscriptionChannel : evt});
    }

    render() {
        return (
            <div>
                <h2> Fill up the details for the buyers </h2>
                <hr />
                <StepList size="L">
                    <Step>Step 1</Step>
                    <Step>Step 2</Step>
                </StepList>
                <div class="radioGroup">
                    <RadioGroup name="radio-group" onChange={e => this.handleStateChange(e)}>
                        <Radio label="Netflix" value="netflix" />
                        <Radio label="Hotstar" value="hotstar" />
                        <Radio label="Sony Liv" value="sonyLiv" />
                        <Radio label="Zee5" value="zee5" />
                    </RadioGroup>
                </div>
                <div class="subscriptionForm">
                    <SubscriptionsFormToBuy subscriptionChannelName={this.state.subscriptionChannel}/>
                </div>
            </div>
        );
    }

}

export default buyContainer;