import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import User from '../lib/User';

export default Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => User.login({username, password});

  return (
    <View
      style={styles.root}>
      <Header
        style={styles.header}
        leftComponent={<Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={25}
          color="black"
        />}
        rightComponent={<Text>Se connecter</Text>}
      />
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <Text>Login</Text>
          <TextInput placeholder='Login' value={username} onChangeText={username => setUsername(username)}/>
          <TextInput placeholder='Password' value={password} onChangeText={password => setPassword(password)}/>
          <View />
          <Button onPress={onLogin} title="Submit" />
        </ScrollView>
      </View>
    </View>
  );
}

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
  },
  scrollView: {
    padding: 20
  }
});
