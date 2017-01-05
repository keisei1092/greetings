import React, { Component } from "react";
import { Link } from "react-router";

export default class Layout extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        へっだー
        {this.props.children}
        ふったー
      </div>
    );
  }
}
