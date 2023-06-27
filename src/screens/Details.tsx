import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DetailsProps} from '../types/nav.types';
import {Picker} from '@react-native-picker/picker';

const Details = ({navigation}: DetailsProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  // const pickerRef = useRef();

  // function open() {
  //   pickerRef.current.focus();
  // }

  // function close() {
  //   pickerRef.current.blur();
  // }

  return (
    <View style={styles.main}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Picker
        selectedValue={selectedLanguage}
        mode="dropdown"
        placeholder="picker"
        style={{color: 'black', backgroundColor: 'white'}}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
