import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import CloseIcon from '../../assests/icons/close-clean.svg';
import {genres} from '../constants/genreList';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalComponent = ({modalVisible, setModalVisible}: Props) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.main}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {genres.map(genre => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={genre.id}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.modalText}>{genre.name}</Text>
                </TouchableOpacity>
              ))}
              <View style={{marginBottom: 100}} />
            </ScrollView>
            <View style={styles.closeView}>
              <Pressable
                style={styles.buttonClose2}
                onPress={() => setModalVisible(!modalVisible)}>
                <CloseIcon width={50} height={50} fill="#000" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.855)',
    // backgroundColor: 'green',
    // width: '100%',
    // height: '100%',
  },
  modalView: {
    margin: 20,
    // backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonClose2: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  closeView: {
    position: 'absolute',
    bottom: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.932)',
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 25,
    marginBottom: 25,
    textAlign: 'center',
    color: '#fffefea1',
    fontSize: 20,
  },
});

export default ModalComponent;
