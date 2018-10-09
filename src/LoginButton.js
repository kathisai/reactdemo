import React, {Component} from 'react'
class LoginButton extends Component {
    constructor(props){
        super(props)
    }

    login(name){
        console.log('Login butotn clicked and data passed to funcion is ' + {name} );
    }

    render() {
        return(
            <button onClick={this.login.bind(this, 'Kathi')}> Login </button>
        );
    }
}

export default LoginButton;