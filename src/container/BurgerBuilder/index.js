import React, {Component} from 'react'
import Burger from '../../components/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 1,
            bacon: 1,
            meat: 2,
            cheese: 2,
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