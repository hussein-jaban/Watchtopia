import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.txtWhite}>Search</Text>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0F0E0E',
  },
  txtWhite: {color: '#FFFF'},
});
