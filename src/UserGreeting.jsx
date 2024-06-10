
import proptypes from 'prop-types';
function UserGreeting(props){
    
   /* if(props.isLoggedIn){
        return <h2>Welcome {props.username} </h2>
    }else{
        return <h2>Log In To Continue</h2>
    } */

        const welcomeMessage=<h2 className="welcome">Welcome {props.username}</h2>;
        const loginMessage=<h2 className="login">Log In To Continue</h2>;
    //return (props.isLoggedIn ?  <h2 className="welcome">Welcome {props.username}</h2> :
      //                           <h2 className="login">Log In To Continue</h2>);
    return (props.isLoggedIn ? welcomeMessage : loginMessage);

}

UserGreeting.prototypes={
    isLoggedIn :proptypes.bool,
    username : proptypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn : false,
    username : "Guest",
}

export default UserGreeting;