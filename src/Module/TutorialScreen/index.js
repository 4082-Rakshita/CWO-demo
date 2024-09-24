import React, { Component } from 'react';
import { View,  Image, Dimensions, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Images } from '../../assets';
import CustomButton from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../../themes/color';

const { width } = Dimensions.get('window');

const items = [
  { id: '1', image: Images.firstimage },
  { id: '2', image: Images.secondimage },
  { id: '3', image: Images.thirdimage },
];

const ITEM_WIDTH = width;
const ITEM_HEIGHT = width * 0.7;

class TutorialScreen extends Component {
  constructor(props) {
    super(props);
    this.flatListRef = React.createRef();
    this.state = {
      currentIndex: 0,
      isVisible: false,
    };
  }

  componentDidMount = async () => {
    this.startAutoScroll();
    const isTutorialVisible = true; 
    await AsyncStorage.setItem('isTutorialVisible', JSON.stringify(isTutorialVisible));
    const storedValue = await AsyncStorage.getItem('isTutorialVisible');
    console.log('tutorial....', storedValue); 
  };
  

  componentWillUnmount() {
    this.stopAutoScroll();
  }

  startAutoScroll = () => {
    this.interval = setInterval(() => {
      if (this.state.currentIndex < items.length - 1) {
        const nextIndex = (this.state.currentIndex + 1) % items.length;
        this.flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        this.setState({ currentIndex: nextIndex });
      }
    }, 3000);
  };

  stopAutoScroll = () => {
    clearInterval(this.interval);
  };

  handleViewableItemsChanged = ({ viewableItems }) => {
    const index = viewableItems[0]?.index || 0;
    this.setState({ currentIndex: index });
  };

  getItemLayout = (data, index) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  });

  onScrollToIndexFailed = (info) => {
    console.log('Scroll to index failed:', info);
  };

  renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
    </View>
  );

  handleLoginPress = async () => {
    const { navigation } = this.props;
    navigation.navigate('Login', { prevPath: 'tutorial' });
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  handleSignupPress = async () => {
    const { navigation } = this.props;
    navigation.navigate('CreateAccount', { prevPath: 'tutorial' });
    navigation.reset({ index: 0, routes: [{ name: 'CreateAccount' }] });
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.dotsContainer}>
          {items.map((dotItem) => (
            <View
              key={dotItem.id}
              style={[
                styles.dot,
                currentIndex === items.findIndex(i => i.id === dotItem.id) && styles.activeDot,
              ]}
            />
          ))}
        </View>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={this.handleViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
          keyExtractor={(item) => item.id}
          ref={this.flatListRef}
          style={styles.flatList}
          getItemLayout={this.getItemLayout}
          onScrollToIndexFailed={this.onScrollToIndexFailed}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title='Login'
            onPress={this.handleLoginPress}
            style={{ padding: 500 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH,
    padding: 10,
    backgroundColor: color.white,
  },
  image: {
    width: ITEM_WIDTH * 0.9,
    height: ITEM_HEIGHT,
    borderRadius: 8,
  },
  dotsContainer: {
    position: 'absolute',

    bottom: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: color.codeinput,
    margin: 5,
  },
  activeDot: {
    backgroundColor: color.shadowcolor,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});

export default TutorialScreen;
