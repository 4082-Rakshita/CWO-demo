import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icons } from '../..//assets';
import color from '../../themes/color';

class CustomButtonWithText extends Component {
  handlePress = () => {
   console.log('//')
  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.handlePress}>
          <View style={styles.iconContainer}>
            <Image style={styles.announcStyle} source={Icons.calender} />
          </View>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: color.white,
    height: 110,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.iconC,
    borderRadius: 100,
  },
  text: {
    marginTop: 10, 
    fontSize: 16,
    color: color.shadowcolor, 
    textAlign: 'center',
  },
  announcStyle: {
    height: 25,
    width: 25,
  },
});

export default CustomButtonWithText;
