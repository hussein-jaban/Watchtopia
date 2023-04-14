import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeProps} from '../types/nav.types';
import Close2 from '../../assests/icons/close2.svg';
import Close1 from '../../assests/icons/closeIcon.svg';

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
      <Close2 width={50} height={50} />
      <Close1 width={500} height={500} fill={'red'} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
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
