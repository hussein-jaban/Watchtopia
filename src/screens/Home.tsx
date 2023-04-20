import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {HomeProps} from '../types/nav.types';
import SlideShow from '../components/SlideShow';
import {imgs, res} from '../utils/mocks/movieRes';
import {SafeAreaView} from 'react-native-safe-area-context';
import SectionSlider from '../components/SectionSlider';
import {subGenres} from '../constants/genreList';

const resData = (arr: any) => {
  return arr.map((item: any) => ({
    id: item.id,
    imgUrl: item.poster_path,
  }));
};

const Home = ({navigation}: HomeProps) => {
  console.log(navigation);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <SlideShow listImages={imgs} />
        {res.map((item, i) => (
          <SectionSlider
            key={i}
            text={subGenres[i].name}
            movies={resData(item)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0E0E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
