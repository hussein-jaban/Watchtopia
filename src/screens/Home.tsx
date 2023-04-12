import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
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
      <ScrollView>
        <SlideShow listImages={imgs} />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Text style={{color: 'white'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          impedit beatae nostrum mollitia, facilis nesciunt culpa vero quam
          quisquam soluta neque, tenetur tempora suscipit veniam natus laborum
          et! Quod aliquid excepturi obcaecati dolorum unde sed eligendi vel
          voluptate quasi minus commodi iusto voluptatem adipisci dolores nam
          rerum explicabo, nesciunt harum, deleniti magni omnis veritatis esse
          corporis alias. Sit, odit molestiae atque perferendis voluptates
          aliquid labore ex libero soluta reiciendis delectus expedita nesciunt
          iure vitae! Esse labore obcaecati voluptate, corrupti eveniet vitae
          ipsum tempore quam! Beatae cumque quaerat inventore eius laudantium
          odit. Similique quo porro error tempora! Aliquam quaerat reprehenderit
          error.
        </Text>
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
    // backgroundColor: 'black',
  },
});
