import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
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
import BottomComponent from '../components/BottomComponent';

const resData = (arr: any) => {
  return arr.map((item: any) => ({
    id: item.id,
    imgUrl: item.poster_path,
  }));
};

const Home = ({navigation}: HomeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [catmodalVisible, setCatModalVisible] = useState(false);
  const [homemodalVisible, seHometModalVisible] = useState(false);
  const mainPages = ['Home', 'Tv Shows'];

  console.log(navigation);
  console.log(isOpen);
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
          {genres.map(genre => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={genre.id}
              onPress={() => setCatModalVisible(!catmodalVisible)}>
              <Text style={styles.modalText}>{genre.name}</Text>
            </TouchableOpacity>
          ))}
        </ModalComponent>
        <SlideShow listImages={imgs} />
        <Button title="open" onPress={() => setIsOpen(!isOpen)} />
        <BottomComponent />
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
