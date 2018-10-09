import React, {Component} from 'react'
class Lists extends Component {

render(){
    
    const numbers = [1,2,3,4,5];


return(
<div>
    <h1>This is example of creating Lists and Keys</h1>
    <br />
<NumberList numbers={numbers} />
</div>
)}

}

function NumberList(props) {
    const numbers = props.numbers;
    // We can also embedding map in to JSX
    // const listItems = numbers.map((number) =>
    //   <li key={number.toString()}>
    //     {number}
    //   </li>
    // );
    // return(<ul>{listItems}</ul>)
    return (
      <ul>{numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      )}</ul>
    );
  }

  
export default Lists;