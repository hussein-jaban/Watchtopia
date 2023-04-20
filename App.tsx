import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomNavTabs from './src/navigations/bottomTabs/BottomNavTabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';

function App() {
  return (
    <GestureHandlerRootView style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <BottomNavTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  main: {flex: 1},
});
export default App;
