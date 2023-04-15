import {
  TouchableOpacity,
  Image,
  Text,
  View,
  // ActivityIndicator
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {StyleSheet, Dimensions} from 'react-native';
import {Imgs} from '../utils/mocks/movieRes';

type Props = {
  listImages: Imgs[];
};

const {width, height} = Dimensions.get('window');

const SlideShow = ({listImages}: Props) => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <>
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
            <Text>Name</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </>
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
  loadingImage: {
    width: width,
    height: height - 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'column',
  },
});
