import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default PostDetail = ({navigation, post}) => {
  return (
    <View style={styles.root}>
      {post.media.type && post.media.type === 'img' ? 
      <Card
        title={post.title}
        image={{uri: post.media.url}}>
        <Text>{post.message}</Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => navigation.navigate('Post', {post})}
          title='VIEW NOW' />
      </Card> :
      <Card title={post.title}>
        <Text>{post.message}</Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => navigation.navigate('Post', {post})}
          title='VIEW NOW' />
      </Card>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
