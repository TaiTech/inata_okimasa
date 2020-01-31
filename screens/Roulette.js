import React, { Component } from 'react';
import { Text } from 'react-native';
 
export default class Roulette extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, props.duration);
  }
  render() {
    const display = this.state.isShowingText ? this.props.text : ' ';
    const menu = ['白水', '沖政宗'];
    const min = 0;
    const max = menu.length - 1;
    const rand = min + Math.random() * (max - min);
    return (
      <Text>{display}</Text>
    );
  }
}