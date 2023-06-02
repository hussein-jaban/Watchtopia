import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import SearchIcon from '../../assests/icons/search.svg';
import CloseIcon from '../../assests/icons/close-clean.svg';
import FullCard from '../components/FullCard';
import {useQuery} from '@tanstack/react-query';
import {searchData, searchPlaceholderFetch} from '../services/api';
import {randomize} from '../utils/randomize';
import {Card} from '../types/common.types';
import useDebounce from '../hooks/useDebounce';
import BlockSection from '../components/BlockSection';

const Search = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);
  const [placeHolderData, setPlaceHolderData] = useState<Card[]>([]);
  const {data: searchPlaceHolderData} = useQuery({
    queryKey: ['searchPlaceHolder'],
    queryFn: searchPlaceholderFetch,
  });
  const {data: searchedData, isLoading: searchLoading} = useQuery({
    queryKey: ['search', debouncedValue],
    queryFn: () => searchData('movie', value),
  });

  const unifyData = useCallback(() => {
    const result = searchPlaceHolderData
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
  }, [searchPlaceHolderData]);

  console.log('====================================');
  console.log('value', value);
  console.log('====================================');
  console.log('debouncedValue', debouncedValue);
  console.log('====================================');
  console.log('searchLoading', searchLoading);
  console.log('searchedData', searchedData);

  useEffect(() => {
    if (searchPlaceHolderData) {
      unifyData();
    }
  }, [searchPlaceHolderData, unifyData]);

  // useEffect(() => {
  //   // Do fetch here...
  //   // Triggers when "debouncedValue" changes
  // }, [debouncedValue]);

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
        {searchLoading ? (
          <ActivityIndicator style={styles.closeIcon} color="#00ff00" />
        ) : value ? (
          <Pressable style={styles.closeIcon} onPress={() => setValue('')}>
            <CloseIcon width={25} height={25} fill="#dbdbdb" />
          </Pressable>
        ) : (
          <View />
        )}
        {/* {value && (
          <Pressable style={styles.closeIcon} onPress={() => setValue('')}>
            <CloseIcon width={25} height={25} fill="#dbdbdb" />
          </Pressable>
        )} */}
      </View>
      <ScrollView>
        {!value ? (
          <>
            <Text style={styles.txtWhite}>Top Searches</Text>
            {placeHolderData.map(item => (
              <FullCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                id={item.id}
              />
            ))}
          </>
        ) : (
          <BlockSection datas={searchedData?.results} />
        )}
        {/* <Text style={styles.txtWhite}>Top Searches</Text>
        {placeHolderData.map(item => (
          <FullCard
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            id={item.id}
          />
        ))} */}
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
