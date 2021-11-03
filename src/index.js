import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};
const helloStyle ={};

if (currDate >= 1 && currDate < 12) {

  greeting = "Good Morning";
  helloStyle.color = '#0c0c92';
  cssStyle.color = '#3b12e0';
  document.body.style.backgroundColor = "#749ed0";

} else if (currDate >=12 && currDate <19) {

  greeting= "Good Afternoon";
  helloStyle.color = '#7a5400';
  cssStyle.color = 'Orange';
  document.body.style.backgroundColor = "#c9c4af";

} else {

  greeting = "Good Night";
  helloStyle.color = 'black';
  cssStyle.color = 'grey';
  document.body.style.backgroundColor = "#2c495a";

}
ReactDOM.render(
 <div>
   <h1>
    <span style={helloStyle}>Hello Sir,</span> <span style={cssStyle}>{greeting}</span>
   </h1>
 </div>,
    document.getElementById('root')
);

