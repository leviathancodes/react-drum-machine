import React, { Component } from 'react';

let Volume = props => {
    return (
    <div className="second-column-rows" id="column-row-2">
      <div className="volume-div">
        <input
          className="volume"
          type="range"
          id="start"
          name="volume"
          min="0"
          max="100"
          onInput={props.volume}
        />
      </div>
    </div>
    );
  };

  export default Volume;

 