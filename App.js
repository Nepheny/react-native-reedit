import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/screens/Home';
import About from './src/screens/About';

const MenuElement = (route, screen, title, label) => {
  return {
    screen: createStackNavigator({
      [route]: {
        screen: screen,
        navigationOptions: ({navigation}) => ({
          title: title,
          headerLeft: (
            <Icon
              onPress={() => navigation.toggleDrawer()}
              name="bars"
              size={25}
              color="black"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{marginLeft: 10}}
            />
          ),
          headerRight: (
            <Icon
              onPress={() => console.log('===> MON COMPTE')}
              name="user"
              size={25}
              color="black"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{marginRight: 10}}
            />
          ),
        }),
      },
    }),
    navigationOptions: ({navigation}) => ({
      drawerLabel: label,
    }),
  };
};

const routes = {
  /*Home: {
    screen: createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
          title: 'Bienvenue sur IT-Reddit',
          headerLeft: (
            <Icon
              onPress={() => navigation.toggleDrawer()}
              name="bars"
              size={25}
              color="black"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{marginLeft: 10}}
            />
          ),
        }),
      },
    }),
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'Accueil',
    }),
  },*/
  Page: MenuElement('Page', About, 'ma seconde page', 'Page 2'),
  About: MenuElement('About', About, 'A propos de IT-Reddit', 'A propos'),
  Home: MenuElement('Home', Home, 'Bienvenue sur IT-Reddit', 'Accueil'),
};

const AppNavigator = createDrawerNavigator(routes, {
  drawerBackgroundColor: '#FFC',
});

export default createAppContainer(AppNavigator);
