import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import config from '../configs/config';
import PostDetail from '../components/PostDetail';

export default Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const getPosts = async () => {
    try {
      // TODO : faire qqch de dynamique pour la recherche
      const req = await fetch(`${config.urlApi}/posts?fromApp=1`);
      const posts = await req.json();
      setData(posts.result);
      setDataLoaded(true);
    } catch (err) {
      // TODO : gérer l'erreur
      console.log(err);
      setDataLoaded(false);
    }
  };

  useEffect(() => {
    if (!dataLoaded) getPosts();
  }, [dataLoaded]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {dataLoaded ?
          data.map((post, i) => <PostDetail navigation={navigation} post={post} key={i}/>) :
          <Text>ERREUR</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center'
  },
  safeArea: {
    flex: 1,
    width: '100%',
  }
});

