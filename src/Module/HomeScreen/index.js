import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets';
import Frequently from '../../Components/Frequently';
import Notification from '../../Components/Notification';
import Activities from '../../Components/Activities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TwoFAModal from '../../Components/2FAModal';
import string from '../../string';
import styles from './style';
export default class HomeScreen extends Component {
  state = {
    modalVisible: true, 
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  hideModal = () => this.setState({ isModalVisible: false });
  navigateToAddPhoneNumber = () => {
    this.props.navigation.navigate('AddPhoneNumber');
    this.setModalVisible(false);
  };

  handleLogout = async () => {
    this.props.navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    const isLoggedin=false;   
    await AsyncStorage.setItem('isLoggedin',  JSON.stringify(isLoggedin));
    const isLogged=   await AsyncStorage.getItem('isLoggedin');
    console.log('home',isLogged)
  };

  closeModal = () => this.setModalVisible(false);

  render() {
    const { modalVisible } = this.state;
    const activityList = Array.from({ length: 10 });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.TopNav}>
            <View style={styles.leftNav}>
              <Text style={styles.welcText}>{string.welcome}</Text>
              <Text style={styles.name}>{string.kelvin}</Text>
            </View>
            <View style={styles.rightNav}>
              <View style={styles.iconContainer}>
                <Image style={styles.iconstyle} source={Icons.cahtIcon} />
              </View>
              <TouchableOpacity style={styles.iconContainer} onPress={this.handleLogout}>
                <Image style={styles.iconstyle} source={Icons.Notification} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.notification}>
              <Notification />
            </View>
            <Text style={styles.heading}>{string.frequentlyused}</Text>
            <View style={styles.frequentlyContner}>
              <Frequently title={string.calender} />
              <Frequently title={string.customer} />
              <Frequently title={string.messages} />
            </View>
            <Text style={styles.heading}>{string.activities}</Text>
            <View style={styles.activitiesContainer}>
              {activityList.map((_, index) => (
                <Activities key={index} />
              ))}
            </View>
          </View>
        </ScrollView>
        {modalVisible && ( 
          <TwoFAModal 
            Close={this.closeModal} 
            navigation={this.navigateToAddPhoneNumber} 
          />
        )}
      </View>
    );
  }
}

