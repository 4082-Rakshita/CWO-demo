import React, { Component } from 'react';
import { View, Text } from 'react-native';
import string from '../../string';


export default class AccountScreen extends Component {
  render() {
    return (
      <View><Text style={{fontSize:24,fontWeight:'800'}}>{string.account}</Text></View>
    );
  }
}

