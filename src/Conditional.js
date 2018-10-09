import React, {Component} from 'react'

class Conditional extends Component {
constructor(props){
    super(props);
    this.state = {isLogedIn : false};
}

handleLogin(){
this.setState({isLogedIn: true});
}

handleLogOut(){
this.setState({isLogedIn: false});
}


render() {
    
        const isLoggedIn = this.state.isLogedIn;
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogOut.bind(this)}/>;
        }else {
            button = <LoginButton onClick={this.handleLogin.bind(this)} />;
        }
        return(
            <div>
                <Greetings isLogin={isLoggedIn} />
                {button}
                {isLoggedIn && <Mailbox unreadMessages={messages} />}
            </div>
            
        );
    }
}

function LoginButton(props){
    return(
        //here we are taking onClick from props 
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>LogOut</button>
    );
}

function Greetings(props){
    if(props.isLogin){
        return <UserGreetings />;
    }else{
        return <GuestGreetings />;
    }
}

function UserGreetings(props){
    return <h1>WelCome User</h1>;
}

function GuestGreetings(props){
    return <h1>SignUp to Login</h1>
}


function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }

export default Conditional;