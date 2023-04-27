import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import PlaceHolder from '../../assests/icons/sharpLoadingTrans.gif';

type SectionMovie = {id: number; imgUrl: string};

type Section = {
  text: string;
  movies: SectionMovie[];
  openModal: (id: number) => void;
};

const SectionSlider = ({text, movies, openModal}: Section) => {
  const [loading, setLoading] = useState(true);
  const randMovies = useMemo(() => {
    return randomize(movies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function randomize(values: any) {
    let index = values.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (index !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      [values[index], values[randomIndex]] = [
        values[randomIndex],
        values[index],
      ];
    }
    return values;
  }

  return (
    <View style={styles.main}>
      <Text style={styles.textColor}>{text}</Text>
      <FlatList
        horizontal
        style={styles.imgScroll}
        data={randMovies}
        keyExtractor={(item: SectionMovie) => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openModal(item.id)}>
            <Image
              style={styles.imageSize}
              // loadingIndicatorSource={PlaceHolder}
              defaultSource={PlaceHolder}
              // source={PlaceHolder}
              onLoadEnd={() => setLoading(false)}
              source={
                loading
                  ? PlaceHolder
                  : {
                      uri: `https://image.tmdb.org/t/p/w500/${item.imgUrl}`,
                    }
              }
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
