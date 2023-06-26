import {Button, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieGenreProps} from '../types/nav.types';
import BlockSection from '../components/BlockSection';
import {getGenreData} from '../services/api';
import {useQuery} from '@tanstack/react-query';

const MovieGenre = ({route, navigation}: MovieGenreProps) => {
  const {id, name, type} = route.params;
  const {data} = useQuery({
    queryKey: [`${type}_${name}_${id}`],
    queryFn: () => getGenreData(type, id),
  });

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.whiteTxt}>{route.params.name}</Text>
      {!data?.results.length && (
        <>
          <Text style={styles.blueTxt}>
            There is no {type} for this category at the moment
          </Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </>
      )}
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
  },
  blueTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    lineHeight: 19,
  },
});
