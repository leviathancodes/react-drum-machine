import React, { Component } from 'react';


let Buttons = props => {
    if (props.active) {
      return (
        <div className="second-column-rows" id="column-row-3">
        <div className="button-container">
          <div className="button-1" />
          <div
            className="button-2"
            onClick={props.toggle}
            style={{ backgroundColor: "white", border: "2px solid #94b4cc" }}
          />
        </div>
        </div>
      );
    } else {
      return (
        <div className="second-column-rows" id="column-row-3">
        <div className="button-container">
          <div
            onClick={props.toggle}
            className="button-1"
            style={{ backgroundColor: "white", border: "2px solid #94b4cc" }}
          />
          <div className="button-2" />
        </div>
        </div>
      );
    }
  };

  export default Buttons;