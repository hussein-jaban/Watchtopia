import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {BackHandler, StyleSheet, View} from 'react-native';
import {Portal} from 'react-native-portalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  onClose?: () => void;
  onOpen?: () => void;
  visible: boolean;
  minPoint?: number | string;
  maxPoint?: number | string;
} & Omit<BottomSheetProps, 'snapPoints'>;

const BottomSheetWrapper = ({
  children,
  onOpen,
  onClose,
  visible,
  minPoint,
  maxPoint,
  ...rest
}: PropsWithChildren<Props>) => {
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

  const snapPoints: (string | number)[] = useMemo(
    () =>
      maxPoint && minPoint
        ? [minPoint, maxPoint]
        : maxPoint
        ? [maxPoint]
        : ['CONTENT_HEIGHT'],
    [maxPoint, minPoint],
  );

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

  const renderCustomHandleComponent = useCallback(
    () => <View style={styles.smallerDividerStyle} />,
    [],
  );

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
        snapPoints={animatedSnapPoints}
        {...rest}>
        <BottomSheetView
          onLayout={handleContentLayout}
          style={styles.container}>
          {children}
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
  smallerDividerStyle: {
    width: 50,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 15,
    height: 5,
    alignSelf: 'center',
    backgroundColor: '#D0CECD',
  },
  background: {backgroundColor: '#FCFCFC'},
});

export default BottomSheetWrapper;
