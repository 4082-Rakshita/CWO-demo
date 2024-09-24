import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default class CustomButton extends React.Component {
  render() {
    const { title, onPress, disabled, style } = this.props;

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, this.props.style, disabled ? styles.buttonDisabled : null]} 
          onPress={onPress}
          disabled={disabled}
        >
          <Text style={[styles.buttonText,this.props.style]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
