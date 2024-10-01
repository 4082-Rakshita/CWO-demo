import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper'; 
import styles from './style';
import color from '../../themes/color';

export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleChangeText = (text) => {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(text);
    }
  };

  render() {
    const { icon, icon2, placeholder, value, error, showError, secureTextEntry, onPressIcon, ...props } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.inputContainer, { borderColor: showError ? color.errorRed : color.white }]}>
          {icon && <Image source={icon} style={styles.icon} />}
          
          <PaperInput
            {...props}
            label={placeholder}
            value={value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={this.handleChangeText}
            secureTextEntry={secureTextEntry}
            error={showError}
            underlineColor="transparent"
            activeUnderlineColor={showError ? color.errorRed : 'black'}
              underlineStyle={{display:'none'}}

            outlineColor={this.props.borderColor}
            activeOutlineColor={this.props.activeOutline}
            theme={{
              
              colors: {
                error: color.errorRed,
              },
              
              roundness: 15,
         
            }}
            style={[
              styles.input,
              icon && { paddingLeft: 20 },
              { backgroundColor: 'white' },
            ]}
          />

          {icon2 && (
            <TouchableOpacity onPress={onPressIcon}>
              <Image source={icon2} style={styles.icon2} />
            </TouchableOpacity>
          )}
        </View>
        {showError && error && (
          <Text style={styles.validationMessage}>{error}</Text>
        )}
      </View>
    );
  }
}



    