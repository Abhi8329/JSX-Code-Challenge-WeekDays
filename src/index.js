//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
var React = require("react");
var ReactDom = require("react-dom");

ReactDom.render(
  <div>
    <h1>7-Days Week</h1>
    <ul>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
      <li>Thursday</li>
      <li>Friday</li>
      <li>Saturday</li>
      <li>Sunday</li>
    </ul>
  </div>,
  document.getElementById("root")
);
