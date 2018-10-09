import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'
import ToggleButton from './ToggleButton';
import LoginButton from './LoginButton';
import Conditional from './Conditional';
import Lists from './Lists';

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <h1>
//         Its {new Date().toLocaleTimeString()} . Now
//       </h1>

//       </div>
//     );
//   }
// }

/**
 * This is simple componet whihc is equal to above method i.e created by with help of ES6 class 
 * @param {*} props 
 */
function App(props){
  return (
    <div>
      <Welcome name="React JS, Lets Rock" />
      <Clock />
      <ToggleButton />
      <hr/>
      <LoginButton />
      <hr />
      <Conditional />
      <hr />
      <Lists />
      <hr />
    <MyFooter name="Prathap" email="sai.990880@gmail.com"/> 
    </div>
  );
};

/**
 * A custome componet with props. It should alwasy start with Capital letter because all lowercase letters functions are 
 * treated as DOM tags by react. We can use this tag muiltiple times as user needed.
 * @param {*} props all props with in that tag can be hadle with this object. i.e "name" here
 */
function Welcome(props){
  return <h1> Hello, {props.name}</h1>;
}

/**
 * another example of writing custom componet and use it as tag, while render method 
 * @param {*} props passing the {name} and {email}
 */
function MyFooter(props){
  return (
<div>
  <footer>
  <p>Posted by: {props.name}</p>
  <p>Contact information: <a href="mailto:{props.email}">
  {props.email}</a>.</p>
  &copy; Copyright 2018 Sai Prathap Reddy Kathi

  </footer>
</div>
  );
}

export default App;
