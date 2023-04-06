import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';

type SctionMovie = {id: number; imgUrl: string};

type Section = {
  text: string;
  movies: SctionMovie[];
};

const SectionSlider = ({text, movies}: Section) => {
  return (
    <View style={styles.main}>
      <Text style={styles.textColor}>{text}</Text>
      <FlatList
        horizontal
        style={styles.imgScroll}
        data={movies}
        keyExtractor={(item: SctionMovie) => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image
              style={styles.imageSize}
              // loadingIndicatorSource={<ActivityIndicator />}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.imgUrl}`,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SectionSlider;

const styles = StyleSheet.create({
  categorySlide: {
    marginVertical: 10,
  },
  main: {
    marginTop: 30,
    // marginBottom: 20,
    flexDirection: 'column',
    gap: 10,
  },
  textColor: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  imageSize: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginHorizontal: -17,
    resizeMode: 'contain',
  },
  imgScroll: {
    flexDirection: 'row',
    marginVertical: 15,
    gap: 15,
  },
});
