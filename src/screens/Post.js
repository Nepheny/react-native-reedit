import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default Post = ({navigation}) => {
  const post = navigation.getParam('post');
  console.log(post)
  return (
    <View style={styles.root}>
      <Header
      leftComponent={
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={25}
          color="black"
        />
      }
      rightComponent={<Text style={{}}>{post.sub}</Text>}
    />
      <Card title={post.title}>
        {post.media.type === 'img' && post.media.url !== '' &&
        <Image source={{uri: post.media.url}} style={styles.image}/>}
        <Text>{post.message}</Text>
        <Text>Création le {post.dateTime /* TODO : faire un travail sur la data */}</Text>
        <Text>Mis à jour le {post.lastUpdate /* TODO : faire un travail sur la data */}</Text>
        <Text>Nombre de commentaires : {post.nbComments /* TODO : faire un travail sur la data */}</Text>
        <Text>Votes : {post.rate /* TODO : faire un travail sur la data */}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    height: '60%'
  }
});
