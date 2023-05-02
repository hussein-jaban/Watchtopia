import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlayIcon from '../../assests/icons/play-outline.svg';
import {Card} from '../types/common.types';

const FullCard = ({imgUrl, title}: Card) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.imageSize}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${imgUrl}`,
        }}
      />
      <Text style={styles.txtWhite}>{title}</Text>
      <PlayIcon style={styles.icon} width={30} height={30} fill="#fff" />
    </View>
  );
};

export default FullCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 8,
    marginBottom: 12,
  },
  imageSize: {
    width: 190,
    height: 90,
    resizeMode: 'cover',
    flex: 1,
  },
  icon: {flex: 2, marginRight: 10, marginBottom: -8},
  txtWhite: {
    color: '#e3e3e3',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
});
