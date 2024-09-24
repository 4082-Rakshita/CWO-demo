import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../../themes/color';
import string from '../../string';

class Activities extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{string.pt}</Text> 
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{string.prabhat}</Text>
          <Text style={styles.messageText}>{string.messagetext}</Text>
        </View>
        <Text style={styles.timeText}>{string.time}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth:1,
    borderBottomColor:color.container,
   
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    backgroundColor: color.avatar, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: color.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    color: color.notifitext, 
  },
  messageText: {
    fontSize: 14,
    fontWeight:'500',
    color: color.subtitle, 
  },
  timeText: {
    color: color.subtitle, 
    fontSize: 12,
  },
});

export default Activities

