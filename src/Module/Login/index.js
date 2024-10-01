// import React from 'react';
// import { View, Text, TouchableOpacity, ImageBackground,} from 'react-native';
// import { Icons, Images } from '../../assets';
// import Header from '../../Components/Header';
// import CustomInput from '../../Components/InputField';
// import Button from '../../Components/Button';
// import styles from './style';
// import CustomModal from '../../Components/ModalMessages';
// import string from '../../string';
// import ToastComponent from '../../Components/ToastMessages';
// import Toast from 'react-native-toast-message';
// import color from '../../themes/color';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { vh } from '../../utils/dimensions';
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       emailError: '',
//       passwordError: '',
//       isModalVisible: false,
//       wrongAttempts: 0,
//       showPassword: false,
//     };
//     this.passwordRef=React.createRef();
//   }

//   validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   validatePassword = (password) => {
//     return password.length >= 8;
//   };
//   validateEmailInput = () => {
//     let emailError = '';
//     if (!this.validateEmail(this.state.email)) {
//       emailError = 'Invalid email format';
//       this.setState({emailError})
//     }
//     this.setState({ emailError });
//   };
//   validatePasswordInput = () => {
   
//     let passwordError = '';
//     if (!this.validatePassword(this.state.password)) {
//       passwordError = 'Password must be at least 8 characters long';
//       this.setState({passwordError})
//     }

//     this.setState({passwordError });
//   };

//   handleEmailChange = (email) => {
//     this.setState({ email }, this.validateEmailInput);
//   };

//   handlePasswordChange = (password) => {
//     this.setState({ password }, this.validatePasswordInput);
//   };

//   togglePasswordVisibility = () => {
//     this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
//   };

//   handleLogin = async() => {
//     if (this.passwordRef.current) {
//       console.log(this.passwordRef, 'this.confirmPasswordRef');
//       this.passwordRef?.current?.focus();
//     }
//     this.validateEmailInput(); 
//     this.validatePasswordInput
//     const { emailError, passwordError, email, password } = this.state;

//     if (!emailError && !passwordError) {
//       if (email === 'r@g.com' && password === 'Rakshita@1') {
//         this.setState({ wrongAttempts: 0 });
//         this.props.navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
//         const isLoggedin = true; 
//         await AsyncStorage.setItem('isLoggedin', JSON.stringify(isLoggedin));
//         console.log('login',isLoggedin)
       
//       } else {
//         Toast.show({ type: 'error', position: 'top', text1: 'Wrong credentials' });
//         this.setState((prevState) => {
//           const newAttempts = prevState.wrongAttempts + 1;
//           if (newAttempts >= 3) {
//             return { isModalVisible: true, wrongAttempts: newAttempts };
//           }
//           return { wrongAttempts: newAttempts };
//         });
//       }
//     }
//   };

//   closeModal = () => {
//     this.setState({ isModalVisible: false, email: '', password: '', emailError: "", passwordError: "" });
//   };

//   handleNavigation = () => {
//     this.props.navigation.navigate('ForgotPassword');
//   };

//   getEmailIcon = () => {
//     const { emailError } = this.state;
//     return emailError ? (emailError ? Icons.errormail : Icons.email) : Icons.email;
//   };

//   getPasswordIcon = () => {
//     const {  passwordError } = this.state;
//     return  passwordError?(passwordError ? Icons.errlock : Icons.errorLock) : Icons.errorLock;
//   };


//   render() {
//     const { emailError, passwordError, isModalVisible, email, password,  showPassword} = this.state;
//     const isButtonEnabled = email && password && !emailError && !passwordError;

//     return (
//       <ImageBackground source={Images.splash_img} style={styles.container} resizeMode="cover">
//               <View style={{position:"absolute"}} >
//              <Header/>
//               </View>
            
//           <KeyboardAwareScrollView
//           style={{ flex: 1 }}
//           extraHeight={120}
//           contentContainerStyle={{flex:1}}

//         >
//             <View style={{position:'relative'}}>
//             </View>
//             <View style={styles.mainContent}>
//               <Text style={styles.text1}>{string.signin}</Text>
//               <Text style={styles.text2}>{string.withcredentials}</Text>

//               <CustomInput
//                 icon={this.getEmailIcon()}
//                 placeholder='Email Address'
//                 onChangeText={this.handleEmailChange}
//                 value={email}
//                 error={emailError }
//                 showError={emailError}
//                 onSubmitEditing={this.handleLogin}
//                 style={{ borderColor: emailError || (  !this.validateEmail(email)) ? color.errorRed : color.white }}
//               />
//               <CustomInput
//                 icon={this.getPasswordIcon()}
//                 icon2={showPassword ? Icons.closedEye : Icons.eye}
//                 placeholder='Password'
//                 onChangeText={this.handlePasswordChange}
//                 value={password}
//                 error={ passwordError}
//                 showError={passwordError}
//                 secureTextEntry={!showPassword}
//                 forwarededref={this.passwordRef}
//                 onPressIcon={this.togglePasswordVisibility}
//                 style={{ borderColor: passwordError || (  !this.validatePassword(password)) ? color.errorRed : color.white }}
//               />
//               <TouchableOpacity style={styles.forgot} onPress={this.handleNavigation}>
//                 <Text style={styles.forgotText}>{string.forgotpasswordname}</Text>
//               </TouchableOpacity>
//               <Button
//                 title='Login'
//                 onPress={this.handleLogin}
//                 disabled={!isButtonEnabled}
//               />
//               <CustomModal
//                 Heading={string.AccountLocked}
//                 visibility={isModalVisible}
//                 text={string.TooManyAttempt}
//                 buttonText='Okay'
//                 onPress={this.closeModal}
//                 onClose={this.closeModal}
//                 image={Icons.lock}
//               />
          
//             </View>
//             <ToastComponent />
//         </KeyboardAwareScrollView>
//       </ImageBackground>
//     );
//   }
// }

// export default Login;


import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground,KeyboardAvoidingView} from 'react-native';
import { Icons, Images } from '../../assets';
import Header from '../../Components/Header';
import CustomInput from '../../Components/InputField';
import Button from '../../Components/Button';
import styles from './style';
import CustomModal from '../../Components/ModalMessages';
import string from '../../string';
import ToastComponent from '../../Components/ToastMessages';
import Toast from 'react-native-toast-message';
import color from '../../themes/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { vh } from '../../utils/dimensions';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isModalVisible: false,
      wrongAttempts: 0,
      showPassword: false,
    };
    this.passwordRef=React.createRef();
  }

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePassword = (password) => {
    return password.length >= 8;
  };
  validateEmailInput = () => {
    let emailError = '';
    if (!this.validateEmail(this.state.email)) {
      emailError = 'Invalid email format';
      this.setState({emailError})
    }
    this.setState({ emailError });
  };
  validatePasswordInput = () => {
   
    let passwordError = '';
    if (!this.validatePassword(this.state.password)) {
      passwordError = 'Password must be at least 8 characters long';
      this.setState({passwordError})
    }

    this.setState({passwordError });
  };

  handleEmailChange = (email) => {
    this.setState({ email }, this.validateEmailInput);
  };

  handlePasswordChange = (password) => {
    this.setState({ password }, this.validatePasswordInput);
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  handleLogin = async() => {
    if (this.passwordRef.current) {
      console.log(this.passwordRef, 'this.confirmPasswordRef');
      this.passwordRef?.current?.focus();
    }
    this.validateEmailInput(); 
    this.validatePasswordInput
    const { emailError, passwordError, email, password } = this.state;

    if (!emailError && !passwordError) {
      if (email === 'r@g.com' && password === 'Rakshita@1') {
        this.setState({ wrongAttempts: 0 });
        this.props.navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
        const isLoggedin = true; 
        await AsyncStorage.setItem('isLoggedin', JSON.stringify(isLoggedin));
        console.log('login',isLoggedin)
       
      } else {
        Toast.show({ type: 'error', position: 'top', text1: 'Wrong credentials' });
        this.setState((prevState) => {
          const newAttempts = prevState.wrongAttempts + 1;
          if (newAttempts >= 3) {
            return { isModalVisible: true, wrongAttempts: newAttempts };
          }
          return { wrongAttempts: newAttempts };
        });
      }
    }
  };

  closeModal = () => {
    this.setState({ isModalVisible: false, email: '', password: '', emailError: "", passwordError: "" });
  };

  handleNavigation = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  getEmailIcon = () => {
    const { emailError } = this.state;
    return emailError ? (emailError ? Icons.errormail : Icons.email) : Icons.email;
  };

  getPasswordIcon = () => {
    const {  passwordError } = this.state;
    return  passwordError?(passwordError ? Icons.errlock : Icons.errorLock) : Icons.errorLock;
  };


  render() {
    const { emailError, passwordError, isModalVisible, email, password,  showPassword} = this.state;
    const isButtonEnabled = email && password && !emailError && !passwordError;

    return (
      <ImageBackground source={Images.splash_img} style={styles.container} resizeMode="cover">
              <View style={{position:"absolute"}} >
             <Header/>
              </View>
            
          <KeyboardAvoidingView
         style={{ flex: 1}}
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 

        >
            <View style={{position:'relative'}}>
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.text1}>{string.signin}</Text>
              <Text style={styles.text2}>{string.withcredentials}</Text>

              <CustomInput
                icon={this.getEmailIcon()}
                placeholder='Email Address'
                onChangeText={this.handleEmailChange}
                value={email}
                error={emailError }
                showError={emailError}
                onSubmitEditing={this.handleLogin}
                style={{ borderColor: emailError || (  !this.validateEmail(email)) ? color.errorRed : color.white }}
              />
              <CustomInput
                icon={this.getPasswordIcon()}
                icon2={showPassword ? Icons.closedEye : Icons.eye}
                placeholder='Password'
                onChangeText={this.handlePasswordChange}
                value={password}
                error={ passwordError}
                showError={passwordError}
                secureTextEntry={!showPassword}
                forwarededref={this.passwordRef}
                onPressIcon={this.togglePasswordVisibility}
                style={{ borderColor: passwordError || (  !this.validatePassword(password)) ? color.errorRed : color.white }}
              />
              <TouchableOpacity style={styles.forgot} onPress={this.handleNavigation}>
                <Text style={styles.forgotText}>{string.forgotpasswordname}</Text>
              </TouchableOpacity>
              <Button
                title='Login'
                onPress={this.handleLogin}
                disabled={!isButtonEnabled}
              />
              <CustomModal
                Heading={string.AccountLocked}
                visibility={isModalVisible}
                text={string.TooManyAttempt}
                buttonText='Okay'
                onPress={this.closeModal}
                onClose={this.closeModal}
                image={Icons.lock}
              />
          
            </View>
            <ToastComponent />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Login;


