import React, {Component} from 'react'
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        }
    }

    render() {
        return (
            <>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls/>
            </>
        );
    }
}

export default BurgerBuilder;