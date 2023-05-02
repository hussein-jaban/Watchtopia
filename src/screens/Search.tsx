import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import SearchIcon from '../../assests/icons/search.svg';
import CloseIcon from '../../assests/icons/close-clean.svg';
import FullCard from '../components/FullCard';
import {useQuery} from '@tanstack/react-query';
import {searchPlaceholderFetch} from '../services/api';
import {randomize} from '../utils/randomize';
import {Card} from '../types/common.types';

const Search = () => {
  const [value, setValue] = useState('');
  const [placeHolderData, setPlaceHolderData] = useState<Card[]>([]);
  const {data} = useQuery({
    queryKey: ['search'],
    queryFn: searchPlaceholderFetch,
  });

  const unifyData = useCallback(() => {
    const result = data
      ?.map(item => item?.results)
      .flat()
      .map(res => {
        return {
          id: res.id,
          imgUrl: res.backdrop_path,
          title: res.title || res.original_title || res.name,
        };
      });
    setPlaceHolderData(randomize(result || []));
  }, [data]);

  console.log('====================================');
  console.log(placeHolderData);
  console.log('====================================');

  useEffect(() => {
    if (data) {
      unifyData();
    }
  }, [data, unifyData]);

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
      <ScrollView>
        <Text style={styles.txtWhite}>Top Searches</Text>
        {placeHolderData.map(item => (
          <FullCard
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            id={item.id}
          />
        ))}
      </ScrollView>
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
