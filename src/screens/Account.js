import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from './Login';

export default Account = ({navigation}) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
    {isLogged ?
      (<View style={styles.root}>
        <Header
          style={styles.header}
          leftComponent={<Icon
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={25}
            color="black"
          />}
          rightComponent={<Text style={{}}>Mon compte</Text>}
        />
        <View style={styles.content}>
          <Text>Profile</Text>
        </View>
      </View>) :
      <Login/>}
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  header: {
    flex: 0,
    maxHeight: 15
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
