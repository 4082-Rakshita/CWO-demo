import React from "react";
import { View, Image } from 'react-native';
import { Images, Icons } from '../../assets';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({ isVisible: false });
  }

  navigateBasedOnState = async () => {
    setTimeout(async () => {
      this.Hide_Splash_Screen();
      const tutorialScreen = await AsyncStorage.getItem('isTutorialVisible');
      const loggedin = await AsyncStorage.getItem('isLoggedin');
      console.log('splashlogin',loggedin)
      console.log('Splash:', tutorialScreen);
      if (tutorialScreen) {
        if(loggedin=='true'){
        this.props.navigation.navigate('HomeScreen');
      }else{
        this.props.navigation.navigate('Login');
      }
      } else {
        this.props.navigation.navigate('TutorialScreen');
      }
    }, 3000);
  }

  componentDidMount = () => {
    this.navigateBasedOnState();
  };

  render() {
    if (!this.state.isVisible) {
      return null;
    }
    return (
      <View style={styles.main}>
        <Image style={styles.image} source={Images.splash_img} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Icons.logo} />
        </View>
      </View>
    );
  }
}
