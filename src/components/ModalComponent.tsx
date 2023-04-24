import React, {PropsWithChildren} from 'react';
import {Alert, Modal, StyleSheet, Pressable, View} from 'react-native';
import CloseIcon from '../../assests/icons/close-clean.svg';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  children,
}: PropsWithChildren<Props>) => {
  return (
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
          {children}
          <View style={styles.closeView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <CloseIcon width={50} height={50} fill="#000" />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
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
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonClose: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  closeView: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
  },
});

export default ModalComponent;
