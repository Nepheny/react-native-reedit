import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AppNavigator from './src/components/Drawer';
import Account from './src/screens/Account';
import Post from './src/screens/Post';

const _Routes = {
  Home: {screen: AppNavigator},
  About: {screen: AppNavigator},
  Account: {screen: Account},
  Post: {screen: Post}
};

const _AppNavigator = createDrawerNavigator(_Routes, {headerMode: 'none'});

export default createAppContainer(_AppNavigator);
