import React from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Icons } from '../../assets'; 
import styles from './style';
import CustomInput from '../../Components/InputField';
import CustomButton from '../../Components/Button';
import Toast from 'react-native-toast-message'; 
import CustomModal from '../../Components/ModalMessages';
import string from '../../string';
import ToastComponent from '../../Components/ToastMessages';


export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showErrorIcons: false,
            newPassword: '',
            confirmPassword: '',
            isPasswordValid: false,
            isConfirmPasswordValid: false,
            formSubmitted: false,
            hasError: false,
            isModalVisible: false,
            passwordValidation: {
                length: false,
                specialChar: false,
                number: false,
                upperCase: false,
                lowerCase: false,
            },
            passwordVisible: false, 
            confirmPasswordVisible: false,
            showPasswordValidation: false,
        };
    }

    togglePasswordVisibility = () => {
        this.setState({ passwordVisible: !this.state.passwordVisible });
    };

    toggleConfirmPasswordVisibility = () => {
        this.setState({ confirmPasswordVisible: !this.state.confirmPasswordVisible });
    };

    handlePasswordChange = (text) => {
        this.setState({ newPassword: text, showPasswordValidation: true }, () => {
            this.validatePassword(text);
        });
    };

    validatePassword = (password) => {
        const minLength = /.{8,}/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        const hasNumber = /\d/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;

        const passwordValidation = {
            length: minLength.test(password),
            specialChar: hasSpecialChar.test(password),
            number: hasNumber.test(password),
            upperCase: hasUpperCase.test(password),
            lowerCase: hasLowerCase.test(password),
        };

        const isPasswordValid = Object.values(passwordValidation).every(Boolean);
        
        this.setState({
            passwordValidation,
            isPasswordValid,
            showPasswordValidation: !isPasswordValid,
        });
    };

    handleConfirmPasswordChange = (text) => {
        this.setState({ confirmPassword: text }, () => {
            this.validateConfirmPassword(text);
        });
    };

    validateConfirmPassword = (confirmPassword) => {
        const isValid = this.state.newPassword === confirmPassword;
        this.setState({ isConfirmPasswordValid: isValid });
    };

    handleSubmit = () => {
        this.setState({ formSubmitted: true });

        const { newPassword, confirmPassword } = this.state;

        if (newPassword && confirmPassword) {
            if (newPassword !== confirmPassword) {
                this.setState({
                    hasError: true,
                    newPassword: '',
                    confirmPassword: '',
                    showErrorIcons: true,
                });
                Toast.show({
                    type: 'error',
                    text1: string.PasswordNotMatch,
                });
            } else {
                this.setState({
                    newPassword: '',
                    confirmPassword: '',
                    isPasswordValid: false,
                    isConfirmPasswordValid: false,
                    hasError: false,
                    formSubmitted: false,
                    isModalVisible: true,
                    showErrorIcons: false,
                });
            }
        } else {
            this.setState({ showErrorIcons: true });
        }
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };
    navigationHandle=()=>{
        this.props.navigation.navigate('Login')
    }

    renderPasswordValidation = () => {
        const { passwordValidation, showPasswordValidation } = this.state;
        if (!showPasswordValidation) return null;

        const validationCriteria = [
            { text: 'At least 8 characters', isValid: passwordValidation.length },
            { text: 'Includes special character', isValid: passwordValidation.specialChar },
            { text: 'Includes number', isValid: passwordValidation.number },
            { text: 'Includes uppercase letter', isValid: passwordValidation.upperCase },
            { text: 'Includes lowercase letter', isValid: passwordValidation.lowerCase },
        ];

        return validationCriteria.map((criterion, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 4, paddingLeft: 50 }}>
                <Image
                    source={criterion.isValid ? Icons.tick : Icons.cross}
                    style={{ width: 12, height: 12, marginRight: 8 }}
                />
                <Text style={{ color: criterion.isValid ? 'green' : 'red', fontSize: 12 }}>
                    {criterion.text}
                </Text>
            </View>
        ));
    };

    render() {
        const { newPassword, confirmPassword, isPasswordValid, isConfirmPasswordValid, isModalVisible, hasError, passwordVisible, confirmPasswordVisible } = this.state;
        const isButtonEnabled = newPassword.length > 0 && confirmPassword.length > 0;

        return (
            <KeyboardAvoidingView
           
            style={{ flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  
          >
              
                    <View style={styles.contentContainer}>
                        <View style={styles.mainContent}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={Icons.resetScreenLogo} />
                            </View>
                            <Text style={styles.text1}>Reset Password</Text>
                            <Text style={styles.text2}>Enter your new password.</Text>
                        </View>
                      <View style={{paddingLeft:30,paddingRight:30}}>
                        <CustomInput
                            icon={this.state.showErrorIcons && !isConfirmPasswordValid ? Icons.errlock: Icons.errorLock} 
                            icon2={passwordVisible ? Icons.closedEye : Icons.eye} 
                            placeholder='New Password'
                            onChangeText={this.handlePasswordChange}
                            value={newPassword}
                            secureTextEntry={!passwordVisible} 
                            onPressIcon={this.togglePasswordVisibility} 
                            showError={this.state.formSubmitted && !isPasswordValid || hasError}
                            showValidation={true}
                            isValid={isPasswordValid}
                        />
                     
                        <View style={{ marginTop: 2, marginBottom: 8 }}>
                            {this.renderPasswordValidation()}
                        </View>
                       
                        <CustomInput
                            icon={this.state.showErrorIcons && !isConfirmPasswordValid ? Icons.errlock : Icons.errorLock} 
                            icon2={confirmPasswordVisible ? Icons.closedEye : Icons.eye} 
                            placeholder='Confirm Password'
                            onChangeText={this.handleConfirmPasswordChange}
                            value={confirmPassword}
                            secureTextEntry={!confirmPasswordVisible} 
                            onPressIcon={this.toggleConfirmPasswordVisibility} 
                            showValidation={true}
                            isValid={isConfirmPasswordValid}
                            showError={this.state.formSubmitted && !isConfirmPasswordValid || hasError}
                            error="Passwords do not match"
                            editable={isPasswordValid} 
                        />
                        </View>
                    </View> 
                         <View style={styles.buttonContainer}>
                            <CustomButton
                                title='Submit'
                                onPress={this.handleSubmit}
                                disabled={!isButtonEnabled}
                            />
                      </View>
               

                <ToastComponent />
                <CustomModal
                    Heading={string.PasswordUpdated}
                    visibility={isModalVisible}
                    text={string.PasswordUpdatedText}
                    buttonText='Back to login'
                    onPress={this.navigationHandle}
                    image={Icons.key}
                    onClose={this.navigationHandle}
                />
             </KeyboardAvoidingView >
        );
    }
}

