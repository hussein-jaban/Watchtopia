import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DetailsProps} from '../types/nav.types';

const Details = ({navigation}: DetailsProps) => {
  return (
    <View style={styles.main}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
