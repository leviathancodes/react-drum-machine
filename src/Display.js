import React from 'react';

const Display = props => {
    return (
        <div className="second-column-rows" id="column-row-1 ">
              <div className="outer-box">
        <div id="display" className="inner-box">
          <h2 className="display-text">{props.value}</h2>
        </div>
      </div>
        </div>

    );
  };

  export default Display;