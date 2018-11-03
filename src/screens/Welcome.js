import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from './components/Slides';


const SLIDE_DATA = [
  { text: 'Welcome to JobApp' , color: '#03A9F4'},
  { text: 'Set Your location, then swipe away', color: '#009688' },
  { text: 'Set Your location, then swie away', color: '#03A9F4' },
];

class Welcome extends Component {

  state = {};

  onSlideComplete = ()  => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} {...this.props} />
    );
  }
}

export default Welcome;
