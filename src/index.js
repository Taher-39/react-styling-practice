//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2000, 5, 25, 17);
const time = date.getHours();

const color = {
  color: ""
};

let msg;
if (time < 12) {
  msg = "Good Morning";
  color.color = "red";
} else if (time < 18) {
  msg = "Good Afternoon";
  color.color = "green";
} else {
  msg = "Good Night";
  color.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={color}>
    {msg}
  </h1>,
  document.getElementById("root")
);
