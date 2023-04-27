import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {res} from '../utils/mocks/movieRes';

const BlockSection = () => {
  const datas = res[0];

  return (
    <View style={styles.main}>
      {datas.map((data, i) => (
        <TouchableOpacity key={i}>
          <Image
            style={styles.imageSize}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            }}
          />
        </TouchableOpacity>
      ))}
      <TouchableOpacity>
        <View style={styles.imageSize}>
          <Text style={styles.whiteTxt}>More</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BlockSection;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
  },
  imageSize: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginHorizontal: -17,
    resizeMode: 'contain',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
