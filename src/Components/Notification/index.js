import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icons} from '../../assets';
import color from '../../themes/color';
import string from '../../string';


class Notification extends Component {
  handlePress = () => {
    console.log('---');
    
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <View style={styles.iconContainer}>
         <Image style={styles.setting} source={Icons.setting} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{string.accountsetup}</Text>
          <Text style={styles.subtitleText}>{string.taptocontinue}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color. Notification, 
    borderRadius: 20, 
    padding: 8,
    alignItems: 'center',
    shadowColor: color.shadowcolor, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color. Notification,
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 15,
    fontWeight:'700',
    paddingBottom:5,
    color: color.notifitext, 
  },
  subtitleText: {
    fontSize: 14,
    color: color.subtitle, 
  },
  setting:{
    height:40,
    width:40
  }
});

export default Notification;