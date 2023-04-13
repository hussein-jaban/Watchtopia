// In App.js in a new project

import React, {useCallback, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {API_KEY} from '@env';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  // getMovieTypeData,
  getGenreData,
} from './src/services/api';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function HomeScreen({navigation}: HomeProps) {
  const fetchData = useCallback(async () => {
    // setLoading(true);
    // const movietypes = ['popular', 'now_playing', 'top_rated', 'upcoming'];
    // const myPromises = movietypes.map(
    //   async item => await getMovieTypeData(item),
    // );
    const ids = [12, 878];
    const myPromises = ids.map(async item => await getGenreData('movie', item));
    const res = await Promise.all(myPromises);
    console.log('====================================');
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    console.log('====================================');
  }, []);

  useEffect(() => {
    fetchData().then().catch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text>Home Screen</Text>
      <Text>{API_KEY}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}: DetailsProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
