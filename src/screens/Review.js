import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class Review extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: <Button title="Settings" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)" onPress={() => navigation.navigate('Settings')} />,
    headerStyle: {
    },
  })

  navigationReview = () => {
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

export default Review;
