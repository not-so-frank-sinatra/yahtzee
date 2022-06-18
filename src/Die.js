import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = { numWords: ['zero', 'one', 'two', 'three', 'four', 'five', 'six'], val: 5 };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let classes = `Die fas fa-4x fa-dice-${this.props.numWords[this.props.val]} `;
    if (this.props.locked) classes += 'Die-locked';
    if (this.props.rolling) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Die;
