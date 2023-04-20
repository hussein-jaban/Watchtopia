import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {HomeProps} from '../types/nav.types';
import SlideShow from '../components/SlideShow';
import {imgs, res} from '../utils/mocks/movieRes';
import {SafeAreaView} from 'react-native-safe-area-context';
import SectionSlider from '../components/SectionSlider';
import {genres, subGenres} from '../constants/genreList';
import Arrowdown from '../../assests/icons/arrowdown.svg';
import ModalComponent from '../components/ModalComponent';

const resData = (arr: any) => {
  return arr.map((item: any) => ({
    id: item.id,
    imgUrl: item.poster_path,
  }));
};

const Home = ({navigation}: HomeProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(navigation);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.catWrapper}>
          <View
            style={styles.catSection}
            // onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Home</Text>
            <Arrowdown width={20} height={20} fill="#dedede" />
          </View>
          <TouchableOpacity
            style={styles.catSection}
            activeOpacity={0.7}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Categories</Text>
            <Arrowdown width={20} height={20} fill="#dedede" />
          </TouchableOpacity>
        </View>
        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
          {genres.map(genre => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={genre.id}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalText}>{genre.name}</Text>
            </TouchableOpacity>
          ))}
        </ModalComponent>
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
    position: 'relative',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
