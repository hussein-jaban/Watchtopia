import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

type BlockType = {
  id: string | null;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type?: string | null;
};

type Props = {
  datas: BlockType[];
};

const BlockSection = ({datas}: Props) => {
  return (
    <View style={styles.main}>
      <View style={styles.wrapper}>
        {datas?.map((data: BlockType, i: number) => {
          console.log(data?.media_type);
          return (
            <TouchableOpacity key={i}>
              {data.poster_path ? (
                <Image
                  style={styles.imageSize}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
                  }}
                />
              ) : data.backdrop_path ? (
                <Image
                  style={styles.noImageSize}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
                  }}
                />
              ) : (
                <Image
                  style={styles.noImageSize}
                  source={require('../../assests/images/noPoster.png')}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BlockSection;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
  },
  imageSize: {
    width: 160,
    height: 180,
    borderRadius: 5,
    marginHorizontal: -17,
    resizeMode: 'contain',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noImageSize: {
    width: 120,
    height: 180,
    borderRadius: 5,
    marginHorizontal: 3,
    resizeMode: 'cover',
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
