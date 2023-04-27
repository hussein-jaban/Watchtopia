import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieGenreProps} from '../types/nav.types';
import BlockSection from '../components/BlockSection';

const MovieGenre = ({route}: MovieGenreProps) => {
  // const route = useRoute();
  // const params = route.params;

  console.log('====================================');
  // console.log(params);
  console.log('====================================');
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.whiteTxt}>{route.params.name}</Text>
      {/* <Text style={styles.whiteTxt}>{navigation.}</Text> */}
      <ScrollView style={styles.scrollContent}>
        <BlockSection />
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
