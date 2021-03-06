import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default Register = ({navigation}) => {
  return (
    <View
      style={styles.root}>
      <Header
        style={styles.header}
        leftComponent={
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={25}
            color="black"
          />
        }
        rightComponent={<Text style={{}}>S'inscrire</Text>}
      />
      <View style={styles.content}>
        <Text>Register</Text>
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
  }
});
