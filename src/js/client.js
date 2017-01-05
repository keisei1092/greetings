import React from "react";
import { render } from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <h1>It works!</h1>
    );
  }
}

render(<Layout/>, document.getElementById('app'));
