import {
  Button,
  StyleSheet,
  //  Text,
  View,
} from 'react-native';
import React from 'react';
import {HomeProps} from '../types/nav.types';
// import Close2 from '../../assests/icons/close2.svg';
// import Close1 from '../../assests/icons/closeIcon.svg';
import SlideShow from '../components/SlideShow';
import {imgs} from '../utils/mocks/movieRes';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView style={styles.main}>
      <SlideShow listImages={imgs} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
});
