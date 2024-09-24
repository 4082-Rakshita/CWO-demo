import React from "react";
import { View, Text, Image, FlatList } from 'react-native';
import { Images, Icons } from "../../assets/index";
import styles from "./style";
import string from "../../string";

const data = [
  { id: '1', icon: Icons.static, title: 'Aesthetical', subtitle: 'Graphics' },
  { id: '2', icon: Icons.clock, title: 'Aesthetical', subtitle: 'Graphics' },
  { id: '3', icon: Icons.quant, title: 'Aesthetical', subtitle: 'Graphics' },
  { id: '4', icon: Icons.quant, title: 'Aesthetical', subtitle: 'Graphics' },
];

export default class Header extends React.Component {
  renderItem = ({ item }) => (
    <View style={styles.texticon}>
      <View style={styles.imagebtn}>
        <Image style={styles.icon} source={item.icon} />
      </View>
      <View style={styles.textFlex}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
    </View>
  );

  render() {
    return (
     
        
        <View style={styles.logoContainer}>
          <Image style={styles.qlogo} source={Icons.qlogo} />
          <View style={styles.textcontainer}>
            <Text style={styles.text1}>{string.QUIVIO}</Text>
            <Text style={styles.text2}>{string.carwash}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.bottom}>
             <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            /> 
            
          </View>
        </View>
   
    );
  }
}
