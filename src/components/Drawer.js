import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import About from '../screens/About';

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
              style={{marginLeft: 10}}
            />
          ),
          headerRight: (
            <Icon
              onPress={() => navigation.navigate('Account')}
              name="user"
              size={25}
              color="black"
              style={{marginRight: 10}}
            />
          ),
        }),
      },
    }),
    navigationOptions: () => ({
      drawerLabel: label,
    }),
  };
};

const routes = {
  Home: MenuElement('Home', Home, 'Bienvenue sur IT-Reddit', 'Accueil'),
  About: MenuElement('About', About, 'A propos de IT-Reddit', 'A propos')
};

export default AppNavigator = createDrawerNavigator(routes, {drawerBackgroundColor: '#FFC'});