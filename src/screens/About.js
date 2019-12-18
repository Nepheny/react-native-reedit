import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default About = ({navigation}) => {
  return (
    <View
      style={styles.root}>
      <Text onPress={() => navigation.toggleDrawer()}>
        A propos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
