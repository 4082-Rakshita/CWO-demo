import React, { Component } from 'react';
import { View, Text,  TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import CustomButton from '../../Components/Button';
import string from '../../string';
import BlurredHeader from '../../Components/BlurrHeader';
import CustomToast from '../../Components/ToastMessages';
import Toast from 'react-native-toast-message';
import styles from './style';
import CustomModal from '../../Components/ModalMessages';
import { Icons } from '../../assets';
import CustomInput from '../../Components/InputField';


class AddPhoneNumber extends Component {
  state = {
    countryCode: 'US',
    callingCode: '1',
    phoneNumber: '',
    showPicker: false,
    flag: '🇺🇸',
    isVisible: false, 
  };

  onSelect = (country) => {
    if (country && country.code && country.dial_code) {
      this.setState({
        countryCode: country.code,
        callingCode: country.dial_code.replace('+', ''),
        flag: country.flag,
        showPicker: false,
      });
    } else {
      console.error('Invalid country data received:', country);
    }
  };

  validation = (field, value) => {
    let filteredValue = value;
    if (field === 'phoneNumber') {
      filteredValue = value.replace(/[^0-9]/g, '');
    }

    this.setState({
      [field]: filteredValue,
    });
  };

  handlePhone = () => {
    const existingPhoneNumber = '1234567890'; 
    const { phoneNumber } = this.state;

    if (phoneNumber === existingPhoneNumber) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'User already exists',
      });
    } else {
      this.props.navigation.navigate('OTPVerification'); 
      this.setState({phoneNumber:''})
    }
  };

  togglePicker = () => {
    this.setState({ showPicker: !this.state.showPicker });
  };

  handleModal = () => {
    this.setState({ isVisible: true });
  };

  handleBack = () => {
    this.props.navigation.navigate('HomeScreen'); 
  }

  handleCloseModal = () => {
    this.setState({ isVisible: false });
  }

  render() {
    const { callingCode, showPicker, flag, isVisible, phoneNumber } = this.state;
    const isButtonDisabled = phoneNumber.length === 0; 

    return (
      <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}    
      >
        <BlurredHeader onPress={this.handleBack} />
        <View style={styles.contentContainer}>
          <View  style={styles.mainContent}>
          <Text style={styles.title}>{string.addPhone}</Text>
          <Text style={styles.description}>{string.twoFA}</Text>
          </View>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity
                style={styles.countryPickerContainer}
                onPress={this.togglePicker}
              >
                <Text style={styles.flagText}>{flag}</Text>
                <CountryPicker
                  show={showPicker}
                  pickerButtonOnPress={this.onSelect}
                  onBackdropPress={this.togglePicker}
                />
              </TouchableOpacity>

              <View style={styles.phoneInputBox}>
                <Text style={styles.callingCode}>+{callingCode}</Text>
                <CustomInput   
                  placeholder="Phone Number"  
                  value={phoneNumber}
                  onChangeText={(value) => this.validation('phoneNumber', value)}
                  keyboardType="numeric"
                 
                />
              </View>
            </View>
            </View>
          
            <View style={styles.buttonContainer}>
            <CustomButton
              title="Send Code"
              onPress={this.handlePhone}
              disabled={isButtonDisabled}
              style={{
                opacity: isButtonDisabled ? 0.5 : 1, 
              }}
            />
           </View>
        <CustomToast />
        {isVisible && (
          <CustomModal
            image={Icons.exit}
            visible={isVisible} 
            onPress={this.handleBack} 
            onPress2={this.handleCloseModal} 
            Heading={string.exit2fa}
            text={string.exit}
            buttonText={string.yesexit}
            buttonText2={string.nocontinue}
          />
        )}
      </KeyboardAvoidingView>
    );
  }
}

export default AddPhoneNumber;
