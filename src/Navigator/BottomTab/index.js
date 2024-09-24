import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Module/HomeScreen';
import AccountScreen from '../../Module/Account';
import FavouriteScreen from '../../Module/Favourite';
import MenuScreen from '../../Module/Menu';
import { Icons } from '../../assets'; 
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={Icons.homeicon} style={{ width: 24, height: 24 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={Icons.accounticon} style={{ width: 24, height: 24 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={Icons.staricon} style={{ width: 24, height: 24 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={Icons.menuicon} style={{ width: 24, height: 24 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
