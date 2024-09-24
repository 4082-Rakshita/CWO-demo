import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Images, Icons } from '../../assets';
import { screenHeight, screenWidth } from '../../constants/Scaling';
import color from '../../themes/color';

class BlurredHeader extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}style={styles.ImageContainer}><Image source={Icons.backArrow} style={styles.image}/></TouchableOpacity>
        <Image source={Images.blurrBackground} style={styles.blurredimage} />
      </View>
    );
  }
}

export default BlurredHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: screenWidth * 0.07661323155,
    backgroundColor: color.blurrhead,
  },
  ImageContainer:{
    marginTop:40,
    height:40,
    padding:10,
   backgroundColor:color.white,
   alignItems:'center',
   borderRadius:5,

  },
  image:{
width:20,
height:20,
  },
 
  blurredimage: {
    width: 250.25,
    height: 150,
    resizeMode: 'contain',
    marginRight: -70,
  },
 
});
