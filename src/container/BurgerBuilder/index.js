import React, {Component} from 'react'
import Burger from '../../components/Burger';

class BurgerBuilder extends Component{
    render() {
        return (
            <>
                <Burger />
                <div>Burger Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;