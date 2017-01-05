import React, { Component } from "react";
import { Link } from "react-router";

export default class Layout extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        {/* header component will be here! :] */}
        {this.props.children}
        {/* footer component will be here! ;] */}
      </div>
    );
  }
}
