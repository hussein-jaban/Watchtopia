import {NativeStackScreenProps} from '@react-navigation/native-stack';
type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
  MovieGenre: {id: number; name: string};
};
type SearchStackParamList = {
  Search: undefined;
};
type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type SearchProps = NativeStackScreenProps<SearchStackParamList, 'Search'>;
type DetailsProps = NativeStackScreenProps<HomeStackParamList, 'Details'>;
type MovieGenreProps = NativeStackScreenProps<HomeStackParamList, 'MovieGenre'>;

export type {
  HomeStackParamList,
  HomeProps,
  DetailsProps,
  SearchStackParamList,
  SearchProps,
  MovieGenreProps,
};
