import {
  TouchableOpacity,
  Image,
  Text,
  View,
  // ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {StyleSheet, Dimensions} from 'react-native';
import {Imgs} from '../utils/mocks/movieRes';
import {genres} from '../constants/genreList';
import Arrowdown from '../../assests/icons/arrowdown.svg';
import ModalComponent from './ModalComponent';

type Props = {
  listImages: Imgs[];
};

const {width, height} = Dimensions.get('window');

const SlideShow = ({listImages}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const getGenreNameById = (id: number) =>
    genres.find(genre => genre.id === id)?.name;

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}>
      {listImages.map((item, i) => (
        <View style={styles.wrapper} key={i}>
          <TouchableOpacity activeOpacity={1}>
            <Image
              source={{uri: item.imgUrl}}
              // loadingIndicatorSource={<ActivityIndicator />}
              style={styles.imageStyles}
            />
          </TouchableOpacity>
          <View style={styles.gnMain}>
            {item.genre_ids.map(
              (genre, z) =>
                z < 3 && (
                  <View key={z} style={styles.gn}>
                    <Text style={styles.gnTxt}>{getGenreNameById(genre)}</Text>
                    {item.genre_ids.length - 1 !== z && z !== 2 && (
                      <View style={styles.gnView} />
                    )}
                  </View>
                ),
            )}
          </View>
        </View>
      ))}
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
    </Animated.ScrollView>
  );
};

export default SlideShow;

const styles = StyleSheet.create({
  imageStyles: {
    width: width,
    height: height - 265,
    resizeMode: 'contain',
    borderRadius: 20,
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
  },
  textStyle: {
    color: '#dedede',
    fontWeight: 'bold',
    fontSize: 15,
    // textAlign: 'center',
  },
  loadingImage: {
    width: width,
    height: height - 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'column',
    position: 'relative',
  },
  gn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
  },
  gnMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    marginTop: 15,
  },
  gnTxt: {
    color: '#7e7e7e',
  },
  gnView: {
    height: 7,
    width: 7,
    borderRadius: 50,
    backgroundColor: '#7e7e7e',
  },
});
