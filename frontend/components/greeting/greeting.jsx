import React from 'react';
import {Link} from 'react-router-dom'



const Greeting = (props) => {

  if(props.currentUser){
    return (
      <div>
        <h1>Hello {props.currentUser.username}</h1>
        <button onClick={props.logout}>Log Out</button>
      </div>

    )
  } else
  {

    return (
      <div>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    )
  }
}

export default Greeting;