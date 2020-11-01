import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from "./ContactData";

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            //['salad', [1]]
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.state.checkoutCancelledHandler}
                    checkoutContinued={this.state.checkoutContinuedHandler}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props)=> (<ContactData
                        ingredients={this.props.ingredients}
                        price={this.state.totalPrice}
                        {...props}/>)}/>
            </div>
        );
    }
}

export default Checkout;