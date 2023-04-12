import {NativeStackScreenProps} from '@react-navigation/native-stack';
type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};
type SearchStackParamList = {
  Search: undefined;
};
type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type SearchProps = NativeStackScreenProps<SearchStackParamList, 'Search'>;
type DetailsProps = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export type {
  HomeStackParamList,
  HomeProps,
  DetailsProps,
  SearchStackParamList,
  SearchProps,
};
