import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomNavTabs from './src/navigations/bottomTabs/BottomNavTabs';

// function HomeScreen({navigation}: HomeProps) {
//   // const {data, status} = useQuery('users', fetchUsers);
//   // const fetchData = useCallback(async () => {
//   //   // setLoading(true);
//   //   // const movietypes = ['popular', 'now_playing', 'top_rated', 'upcoming'];
//   //   // const myPromises = movietypes.map(
//   //   //   async item => await getMovieTypeData(item),
//   //   // );
//   //   const myPromises = subGenres.map(
//   //     async item => await getGenreData('movie', item.id),
//   //   );
//   //   const res = await Promise.all(myPromises);
//   //   console.log('====================================');
//   //   console.log('====================================');
//   //   console.log(res);
//   //   console.log('====================================');
//   //   console.log('====================================');
//   // }, []);

//   // useEffect(() => {
//   //   fetchData().then().catch();
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'black',
//       }}>
//       <Text>Home Screen</Text>
//       <Text>{API_KEY}</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator> */}
      <BottomNavTabs />
    </NavigationContainer>
  );
}

export default App;
