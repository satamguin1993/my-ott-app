import React from 'react';
import {Form, FormItem} from "@react/react-spectrum/Form";
import TextField from "@react/react-spectrum/Textfield";
import Checkbox from "@react/react-spectrum/Checkbox";
import Button from "@react/react-spectrum/Button";

class PaymentDetails extends React.Component {

    state = {
        creditCardNumber : null,
        expiryDate : null,
        cvvNumber : null,
        cardHolderName : null,
        isChecked : false
    }

    handleCreditCardNumber = (value) => {
        this.setState({creditCardNumber : value});
    }

    validateOnChange = (evt) => {
        this.setState({isChecked : evt})
    }

    handleCreditCardCvvNumber = (value) => {
        this.setState({cvvNumber : value});
    }

    handleCreditCardExpiry = (value) => {
        this.setState({expiryDate : value});
    }

    handleCreditCardHolderName = (value) => {
        this.setState({cardHolderName : value});
    }

    render() {
        return (
            <div>
                <Form aria-labelledby="standard-form">
                    <FormItem label="Credit Card Number">
                        <TextField placeholder="credit card number" name="cardNumber"
                                   onChange={e => this.handleCreditCardNumber(e)} />
                    </FormItem>
                    <FormItem label="Credit Card CVV">
                        <TextField placeholder="credit card cvv" name="cvvNumber"
                                   onChange={e => this.handleCreditCardCvvNumber(e)} />
                    </FormItem>
                    <FormItem label="Credit Card Expiry">
                        <TextField placeholder="credit card expiry(mm/yy)" name="cardExpiry"
                                   onChange={e => this.handleCreditCardExpiry(e)} />
                    </FormItem>
                    <FormItem label="Credit Card Holder Name">
                        <TextField placeholder="credit card holder name" name="cardHolderName"
                                   onChange={e => this.handleCreditCardHolderName(e)} />
                    </FormItem>
                    <Checkbox label="Accept Term & Conditions to Proceed"
                              onChange={(evt) => this.validateOnChange(evt)}/>
                    <Button variant={'action'} disabled={!this.state.isChecked}
                            onClick={() => this.submitDetails()}> Submit your Request </Button>
                </Form>
            </div>
        );
    }
}

export default PaymentDetails;