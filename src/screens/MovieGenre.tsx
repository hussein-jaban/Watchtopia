import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieGenreProps} from '../types/nav.types';
import BlockSection from '../components/BlockSection';
import {getGenreData} from '../services/api';
import {useQuery} from '@tanstack/react-query';

const MovieGenre = ({route}: MovieGenreProps) => {
  const {id, name} = route.params;
  const {data} = useQuery({
    queryKey: [`movie_${name}_${id}`],
    queryFn: () => getGenreData('movie', id),
  });

  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.whiteTxt}>{route.params.name}</Text>
      {/* <Text style={styles.whiteTxt}>{navigation.}</Text> */}
      <ScrollView style={styles.scrollContent}>
        <BlockSection datas={data?.results} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieGenre;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0F0E0E',
    position: 'relative',
  },
  scrollContent: {
    // flex: 3,
  },
  whiteTxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    // flex: 1,
  },
});
