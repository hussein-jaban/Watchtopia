import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import SearchIcon from '../../assests/icons/search.svg';
import CloseIcon from '../../assests/icons/close-clean.svg';
import FullCard from '../components/FullCard';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.srchCont}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          autoFocus={false}
          placeholder="Search for movies or tv shows..."
          placeholderTextColor="#b5b5b5"
        />
        <SearchIcon
          style={styles.srchIcon}
          width={25}
          height={25}
          fill="#dbdbdb"
        />
        {value && (
          <Pressable style={styles.closeIcon} onPress={() => setValue('')}>
            <CloseIcon width={25} height={25} fill="#dbdbdb" />
          </Pressable>
        )}
      </View>
      <Text style={styles.txtWhite}>Top Searches</Text>
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0F0E0E',
  },
  txtWhite: {
    color: '#e3e3e3',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingLeft: 40,
    color: '#dbdbdb',
    backgroundColor: '#303030',
  },
  srchCont: {
    position: 'relative',
    marginTop: 20,
  },
  srchIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
