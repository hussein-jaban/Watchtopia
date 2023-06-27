import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useRef} from 'react';
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
import Close from '../../assests/icons/close2.svg';
import PlayFull from '../../assests/icons/playFull.svg';
import Download from '../../assests/icons/download.svg';
import Plus from '../../assests/icons/plus.svg';
import Share from '../../assests/icons/shareFull.svg';
import Info from '../../assests/icons/info-outline.svg';
import ArrowRight from '../../assests/icons/arrow-right.svg';

type Props = {
  onClose?: () => void;
  onOpen?: () => void;
  visible: boolean;
  selected?: any;
  goToDetails?: () => void;
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
  goToDetails,
  selected = res[0][0],
}: Props) => {
  const {top} = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);

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
                <View style={styles.rowBtw}>
                  <Text style={styles.title} onPress={goToDetails}>
                    {selected?.original_title}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.iconDiv}
                    onPress={() => onClose && onClose?.()}>
                    <Close width={30} height={30} fill={'#fff'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.row10}>
                  <Text style={styles.min}>
                    {selected.release_date?.substring(0, 4)}
                  </Text>
                  <Text style={[styles.min, styles.marginH15]}>
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
                  {item.icon}
                  <Text style={styles.min2}>{item.name}</Text>
                </View>
              ))}
            </View>
            <View style={styles.lineStyle} />
            <View style={styles.spaceBtw}>
              <View style={styles.rowCenter}>
                <Info width={28} height={28} fill={'#fff'} />
                <Text style={styles.des2}>Details & More</Text>
              </View>
              <ArrowRight width={27} height={27} fill={'#fff'} />
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
  row10: {flexDirection: 'row', marginVertical: 10},
  marginH15: {marginHorizontal: 15},
  backbg: {
    backgroundColor: '#000000d2',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
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
  iconDiv: {},
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
