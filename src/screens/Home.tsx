import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeProps} from '../types/nav.types';
// import Close2 from '../../assests/icons/close2.svg';
// import Close1 from '../../assests/icons/closeIcon.svg';
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
});
