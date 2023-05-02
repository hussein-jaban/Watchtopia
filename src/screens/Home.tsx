import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {HomeProps} from '../types/nav.types';
import SlideShow from '../components/SlideShow';
// import {imgs, res} from '../utils/mocks/movieRes';
import {SafeAreaView} from 'react-native-safe-area-context';
import SectionSlider from '../components/SectionSlider';
import {genres, subGenres} from '../constants/genreList';
import Arrowdown from '../../assests/icons/arrowdown.svg';
import ModalComponent from '../components/ModalComponent';
import BottomSheetWrapper from '../components/BottomSheetWrapper';
import {useQuery} from '@tanstack/react-query';
import {getMoviePageData} from '../services/api';
import {randomize} from '../utils/randomize';
import {Card} from '../types/common.types';

export type Imgs = {
  id: number;
  imgUrl: string;
  genre_ids?: number[];
};

const resData = (arr: any) => {
  return arr.map((item: any) => ({
    id: item.id,
    imgUrl: item.poster_path,
  }));
};

const Home = ({navigation}: HomeProps) => {
  const {data} = useQuery({
    queryKey: ['movie_home'],
    queryFn: getMoviePageData,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [imgs, setImgs] = useState<Card[]>([]);
  const [selected, setSelected] = useState({});
  const [catmodalVisible, setCatModalVisible] = useState(false);
  const [homemodalVisible, seHometModalVisible] = useState(false);
  const mainPages = ['Home', 'Tv Shows'];

  const onClose = () => {
    setSelected({});
    setIsOpen(false);
  };

  const openModal = (id: number) => {
    const chosen = data
      ?.map(item => item?.results)
      .flat()
      .find(item => item.id === id);
    setSelected(chosen || {});
    setIsOpen(true);
  };

  const refactorSlideContent = useCallback(() => {
    const results = data?.map(item => item?.results);
    const slideContent: Card[] =
      results?.flat().map(item => {
        return {
          id: item.id,
          imgUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          genre_ids: item.genre_ids,
        };
      }) || [];
    const uniqueData = [
      ...new Set(slideContent.map(item => JSON.stringify(item))),
    ].map(item => JSON.parse(item));
    setImgs(randomize(uniqueData));
  }, [data]);

  useEffect(() => {
    if (data) {
      refactorSlideContent();
    }
  }, [data, refactorSlideContent]);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.catWrapper}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.catSection}
            onPress={() => seHometModalVisible(!homemodalVisible)}>
            <Text style={styles.textStyle}>Home</Text>
            <Arrowdown width={20} height={20} fill="#dedede" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.catSection}
            activeOpacity={0.7}
            onPress={() => setCatModalVisible(!catmodalVisible)}>
            <Text style={styles.textStyle}>Categories</Text>
            <Arrowdown width={20} height={20} fill="#dedede" />
          </TouchableOpacity>
        </View>
        <ModalComponent
          modalVisible={homemodalVisible}
          setModalVisible={seHometModalVisible}>
          {mainPages.map(item => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item}
              onPress={() => seHometModalVisible(!homemodalVisible)}>
              <Text style={styles.modalText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ModalComponent>
        <ModalComponent
          modalVisible={catmodalVisible}
          setModalVisible={setCatModalVisible}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.moreScroll}
            showsVerticalScrollIndicator={false}>
            {genres.map(genre => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={genre.id}
                onPress={() => {
                  setCatModalVisible(!catmodalVisible);
                  navigation.navigate('MovieGenre', genre);
                }}>
                <Text style={styles.modalText}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.emp} />
          </ScrollView>
        </ModalComponent>
        <SlideShow listImages={imgs} />
        {data?.map((item, i) => (
          <SectionSlider
            key={i}
            text={subGenres[i].name}
            movies={resData(item?.results)}
            openModal={openModal}
          />
        ))}
      </ScrollView>
      <BottomSheetWrapper
        visible={isOpen}
        onClose={onClose}
        selected={selected}
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
    backgroundColor: '#0F0E0E',
    position: 'relative',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emp: {marginBottom: 100},
  scroll: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  moreScroll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginTop: 25,
    marginBottom: 25,
    textAlign: 'center',
    color: '#fffefea1',
    fontSize: 20,
  },
  catSection: {
    flexDirection: 'row',
    gap: 5,
  },

  catWrapper: {
    position: 'absolute',
    top: 30,
    left: 20,
    flexDirection: 'row',
    gap: 20,
    zIndex: 100,
  },
});
