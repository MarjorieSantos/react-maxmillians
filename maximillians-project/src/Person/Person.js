import React from "react";
import "./Person.css";

const person = (props) => {
  return <div className='Person'>
    <p onClick={props.click}>{props.name} {props.age}</p>
    <input type="text" onChange={props.onchange} value={props.value} />
  </div>
}

export default person;