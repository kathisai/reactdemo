import React, {Component} from 'react'

class ToggleButton extends Component {
    constructor(props){
        super(props);
        this.state = {isToogle: true};
        this.handlelClick = this.handlelClick.bind(this);
    }

    handlelClick(){
        this.setState(state => ({
            isToogle : !state.isToogle
        }));
    }

    render() {
        return (
            <button onClick={this.handlelClick}> {this.state.isToogle ? 'On' : 'Off'} </button>

        // another way to call handleclick method with out bind(this) is like below : note this might cause performence issue
        //     <button onClick={(e) => this.handleClick(e)}>
        //     Click me
        //   </button>
        );
    }

}
export default ToggleButton;

