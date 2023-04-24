import React, {useCallback, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomComponent = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  // const snapPoints = useMemo(() => ['41%'], []);
  const snapPoints = ['41%'];

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      // index={1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onChange={handleSheetChanges}>
      <View style={styles.contentContainer}>
        <Text style={{color: 'black'}}>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 24,
  //   backgroundColor: 'grey',
  // },
  contentContainer: {
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default BottomComponent;
