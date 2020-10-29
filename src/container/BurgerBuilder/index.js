import React, {Component} from 'react'
import Burger from '../../components/Burger';

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
                <div>Burger Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;