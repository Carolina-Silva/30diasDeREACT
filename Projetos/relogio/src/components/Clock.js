import React from "react";

class Clock extends React.Component {

   render() {
    return (
      <div className="relogio">
        <h1>Relógio: </h1>
          <h2>
          {new Date().getHours()}:
          {new Date().getMinutes()}:
          {new Date().getSeconds()}
        </h2>
      </div>
    );
  }
}

export default Clock