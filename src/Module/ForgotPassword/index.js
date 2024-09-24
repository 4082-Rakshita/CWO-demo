import React from 'react';
import { View, Text,  KeyboardAvoidingView, Platform} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icons } from '../../assets';
import styles from './style';
import CustomInput from '../../Components/InputField';
import CustomButton from '../../Components/Button';
import CustomModal from '../../Components/ModalMessages';
import string from '../../string';
import ToastComponent from '../../Components/ToastMessages'; 
import Toast from 'react-native-toast-message';
import BlurredHeader from '../../Components/BlurrHeader';
import color from '../../themes/color';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            isModalVisible: false,
        };
    }

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    validateInput = (email) => {
        let emailError = '';

        if (!email) {
            emailError = string.emailempty
        } else if (!this.validateEmail(email)) {
            emailError = string.invalidemailformat;
        }

        return emailError;
    };

    handleEmailChange = (email) => {
        const emailError = this.validateInput(email);
        this.setState({ email, emailError });
    };

    handleEmailFocus = () => {
        this.setState({ emailError: '' }); 
    };

    handleSendLink = () => {
        const { email, emailError } = this.state;

        if (emailError) {
            Toast.show({ type: string.errortype, position: 'top', text1: emailError });
        } else if (email === 'r@g.com') {
            this.setState({ isModalVisible: true, email: '' }); 
        } else {
            Toast.show({ type: string.errortype, position: 'top', text1: string.emailnotfound});
        }
    };

    handleBack = () => {
        this.setState({ isModalVisible: false, email: '' }); 
        this.props.navigation.navigate('Login');
    };
    handlePress = () => {
        this.setState({ isModalVisible: false, email: '' }); 
        this.props.navigation.navigate('ResetPassword');
    };
    getEmailIcon = () => {
        const { emailError } = this.state;
        return emailError ? Icons.errormail : Icons.email;
    };
    getEmailBorderColor=()=>{
        const { emailError } = this.state;
        return emailError ? color.errorRed : color.white;
    }

    render() {
        const { email, emailError } = this.state;
        const isButtonDisabled = !!emailError || email.trim() === '';

        return (
            <KeyboardAvoidingView
            style={{ flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}    
            >
      
                <BlurredHeader onPress={this.handleBack} />
                <View style={styles.contentContainer}>
                    <View style={styles.mainContent}>
                        <Text style={styles.text1}>{string.ForgotPassword}</Text>
                        <Text style={styles.text2}>{string.resetline}</Text>
                      </View>
                        <View style={{paddingLeft:20,paddingRight:20}}>
                        <CustomInput
                            icon={this.getEmailIcon()} 
                            placeholder={string.emailaddress}
                            onChangeText={this.handleEmailChange}
                            value={email}
                            error={emailError}
                            showError={emailError }
                            style={{
                                borderColor: this.getEmailBorderColor()
                            }}
                            onFocus={this.handleEmailFocus}
                        />
                        </View>
                      </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                title={string.LinkSend}
                                onPress={this.handleSendLink}
                                disabled={isButtonDisabled}
                                style={isButtonDisabled ? styles.disabledButton : {}}
                            />
                      </View>
               

                <CustomModal
                    Heading={string.LinkSend}
                    visibility={this.state.isModalVisible}
                    text={string.ResetPassword}
                    buttonText={string.backtologin}
                    onPress={this.handlePress}
                    image={Icons.target}
                    onClose={this.handlePress}
                />
                <ToastComponent /> 
             </KeyboardAvoidingView>
           
        );
    }
}
