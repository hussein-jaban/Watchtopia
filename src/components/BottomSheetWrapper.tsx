import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  // BottomSheetProps,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {
  // PropsWithChildren,
  useCallback,
  useEffect,
  // useMemo,
  useRef,
} from 'react';
import {
  BackHandler,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {Portal} from 'react-native-portalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {res} from '../utils/mocks/movieRes';
import Trend from '../../assests/icons/trend.svg';
import Close from '../../assests/icons/close2.svg';
import PlayFull from '../../assests/icons/playFull.svg';
import Download from '../../assests/icons/download.svg';
import Plus from '../../assests/icons/plus.svg';
import Share from '../../assests/icons/shareFull.svg';

type Props = {
  onClose?: () => void;
  onOpen?: () => void;
  visible: boolean;
  selected?: any;
};

const icons = [
  {
    name: 'Play',
    icon: <PlayFull width={30} height={30} fill={'#fff'} />,
  },
  {
    name: 'Download',
    icon: <Download width={30} height={30} fill={'#fff'} />,
  },
  {
    name: 'My List',
    icon: <Plus width={30} height={30} fill={'#fff'} />,
  },
  {
    name: 'Share',
    icon: <Share width={30} height={30} fill={'#fff'} />,
  },
];

const BottomSheetWrapper = ({
  onOpen,
  onClose,
  visible,
  selected = res[0][0],
}: Props) => {
  const {top} = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // console.log('====================================');
  // console.log(selected);
  // console.log('====================================');
  // handle back press events for Android
  useEffect(() => {
    const onBackPress = () => {
      // check if modal is open and fire onClose event
      if (!visible) {
        return false;
      }

      onClose?.();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, [onClose, visible]);

  const snapPoints = ['42%'];
  const shortify = (text: string) => `${text?.substring(0, 150)}...`;

  const {
    animatedContentHeight,
    animatedSnapPoints,
    handleContentLayout,
    animatedHandleHeight,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  useEffect(() => {
    visible
      ? bottomSheetRef?.current?.expand()
      : bottomSheetRef?.current?.close();
  }, [visible]);

  const renderCustomHandleComponent = useCallback(() => <View />, []);

  const renderCustomBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        style={[props.style, styles.backbg]}
      />
    ),
    [],
  );

  return (
    <Portal>
      <BottomSheet
        topInset={top}
        backdropComponent={renderCustomBackdrop}
        handleComponent={renderCustomHandleComponent}
        backgroundStyle={styles.background}
        ref={bottomSheetRef}
        handleHeight={animatedHandleHeight}
        index={-1}
        contentHeight={animatedContentHeight}
        enableContentPanningGesture
        enablePanDownToClose={true}
        animateOnMount
        // handleComponent={() => <></>}
        onChange={index => (index === -1 ? onClose?.() : onOpen?.())}
        snapPoints={animatedSnapPoints}>
        <BottomSheetView
          onLayout={handleContentLayout}
          style={styles.container}>
          <View>
            <View style={styles.main}>
              <Image
                style={styles.imageSize}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${selected.poster_path}`,
                }}
              />
              <View style={styles.right}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>{selected?.original_title}</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.iconDiv}
                    onPress={() => onClose && onClose?.()}>
                    <Close width={25} height={25} fill={'#fff'} />
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <Text style={styles.min}>
                    {selected.release_date?.substring(0, 4)}
                  </Text>
                  <Text style={[styles.min, {marginHorizontal: 15}]}>
                    {selected.adult ? '18+' : '13+'}
                  </Text>
                  <Text style={styles.min}>3 seasons</Text>
                </View>
                <Text style={styles.des}>{shortify(selected.overview)}</Text>
              </View>
            </View>
            <View style={styles.icons}>
              {icons.map((item, i) => (
                <View key={i} style={styles.icon}>
                  {/* <FontAwesomeIcons name="share-alt" size={30} color="white" /> */}
                  {/* <Trend width={30} height={30} fill={'#fff'} /> */}
                  {item.icon}
                  <Text style={styles.min2}>{item.name}</Text>
                </View>
              ))}
            </View>
            <View style={styles.lineStyle} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <Ionicons
                name="information-circle-outline"
                size={30}
                color="white"
              /> */}
                <Trend width={30} height={30} fill={'#fff'} />
                <Text style={styles.des2}>Details & More</Text>
              </View>
              {/* <AntDesignIcon name="right" size={25} color="white" /> */}
              <Trend width={30} height={30} fill={'#fff'} />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backbg: {
    backgroundColor: '#000000d2',
  },
  background: {
    backgroundColor: '#333232',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: 12,
    marginBottom: 5,
  },
  icon: {justifyContent: 'center', alignItems: 'center'},
  icons: {flexDirection: 'row', justifyContent: 'space-around', marginTop: 20},
  min: {color: 'grey'},
  min2: {color: 'grey', marginTop: 7, fontSize: 12},
  des: {color: 'white'},
  des2: {color: 'white', marginLeft: 7, fontSize: 15, fontWeight: '500'},
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    flex: 8,
  },
  right: {flex: 3, color: 'white'},
  iconDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
    flex: 1,
    marginHorizontal: 7,
    marginRight: 10,
  },
});

export default BottomSheetWrapper;
