import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlayIcon from '../../assests/icons/play-outline.svg';

const FullCard = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.imageSize}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/OIGX2lm5tmlCKvZUghtwHzoxxO.jpg',
        }}
      />
      <Text style={styles.txtWhite}>Shazam</Text>
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
    gap: 5,
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
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    flexWrap: 'wrap',
    flex: 1,
    // backgroundColor: 'red',
  },
});
