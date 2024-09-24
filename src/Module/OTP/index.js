import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomButton from '../../Components/Button';
import BlurredHeader from '../../Components/BlurrHeader'; 
import CustomModal from '../../Components/ModalMessages'; 
import { Icons } from '../../assets';
import styles from './style';
import string from '../../string';
import VerifyOtp from 'react-native-otp-textinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import color from '../../themes/color';

class VerifyAccountAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      attemptsLeft: 3,
      showErrorModal: false,
      showSuccessModal: false,
      errorMessage: '',
    };
    this.validOtp = '123456'; 
  }

  handleTextChange = (text) => {
    this.setState({ otp: text });
  };

  handleConfirm = () => {
    const { otp, attemptsLeft } = this.state;

    console.log("Comparing OTP: User OTP:", otp, "Valid OTP:", this.validOtp); 
    if (otp.length === 6 && otp === this.validOtp) {
      this.setState({ showSuccessModal: true, errorMessage: '' });
    } else {
      if (attemptsLeft > 1) {
        this.setState((prevState) => ({
          attemptsLeft: prevState.attemptsLeft - 1,
          errorMessage: `You have ${prevState.attemptsLeft - 1} left attempts.`,
        }));
      } else {
        this.setState({ showErrorModal: true });
      }
    }
  };

  handleBack = () => {
    this.props.navigation.navigate('AddPhoneNumber');
  };

  closeErrorModal = () => {
    this.setState({ showErrorModal: false });
    this.props.navigation.navigate('HomeScreen'); 
  };

  closeSuccessModal = () => {
    this.setState({ showSuccessModal: false });
    this.props.navigation.navigate('Login'); 
  };

  render() {
    const { attemptsLeft, showErrorModal, showSuccessModal, errorMessage } = this.state;

    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: '#E7EDF3' }}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        <BlurredHeader onPress={this.handleBack} />
        <View style={styles.container}>
          <Text style={styles.title}>{string.verifyac}</Text>
          <Text style={styles.description}>
            <Text style={styles.text2}>{string.entercode}</Text>
            <Text style={styles.phoneNumber}> {string.number}</Text>
          </Text>

          <VerifyOtp
            handleTextChange={this.handleTextChange}
            inputCount={6}
            textInputStyle={styles.otpInput}
            tintColor={'#ccc'}
            containerStyle={[styles.Inputcontainer,{borderColor: errorMessage ? color.errorRed : color.white}]}
            autoFocusOnLoad
            onCodeFilled={(code) => {
              this.setState({ otp: code }); 
            }}
          />
          
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendText}>{string.resend}</Text>
          </TouchableOpacity>
          <CustomButton
            title='Confirm Code'
            onPress={this.handleConfirm}
            style={styles.confirmButton}
          />
        </View>

        {showErrorModal && (
          <CustomModal
            image={Icons.multipleAttempt}
            visible={showErrorModal}
            onPress={this.closeErrorModal}
            Heading={string.error}
            text={string.attemptsExhausted}
            buttonText={string.backtologin}
          />
        )}
        
        {showSuccessModal && (
          <CustomModal
            image={Icons.accountverified}
            visible={showSuccessModal}
            onPress={this.closeSuccessModal}
            Heading={string.success}
            text={string.OTPverified}
            buttonText={string.backtologin}
          />
        )}
      </KeyboardAwareScrollView>
    );
  }
}

export default VerifyAccountAccess;
