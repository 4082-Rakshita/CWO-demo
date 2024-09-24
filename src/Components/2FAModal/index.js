import React from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Icons } from '../../assets';
import CustomButton from '../../Components/Button';
import string from '../../string';
import color from '../../themes/color';

class TwoFAModal extends React.Component {
  state = {
    modalVisible: true,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  navigateToAddPhoneNumber = () => {
    this.props.navigation.navigate('AddPhoneNumber');
    this.setModalVisible(false);
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={this.props.Close}
      >
        <TouchableWithoutFeedback onPress={this.props.Close}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={styles.centerContainer}>
                <View style={{ paddingBottom: 20 }}>
                  <Image style={styles.icon} source={Icons.mobile} />
                </View>
              </View>
              <View>
                <Text style={styles.modalText}>{string.secureacc}</Text>
                <Text style={styles.modaltext2}>
                 {string.getstarted2fa}
                </Text>
                <View style={styles.imageicon}>
                  {[
                    { icon: Icons.phoneNumber, text: string.linkaccount },
                    { icon: Icons.passcode, text: string.onetimepasscode },
                    { icon: Icons.secureaccount, text: string.secureaccount }
                  ].map((item, index) => (
                    <View key={index} style={styles.pairContainer}>
                      <View style={styles.iconWrapper}>
                        <Image style={styles.image} source={item.icon} />
                      </View>
                      <Text style={styles.textvalue}>{item.text}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <CustomButton
                title={string.getstarted}
                onPress={this.props.navigation}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centerContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 100,
  },
  imageicon: {
    flexDirection: 'column',
  },
  modalContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: color.Secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
    color: color.modal2fa,
  },
  modaltext2: {
    fontSize: 15,
    fontWeight: '400',
    color: color.modaltext2fa,
    marginBottom: 20,
  },
  pairContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  textvalue: {
    fontWeight: '600',
    fontSize: 14,
    color: color.modaltext2fa,
  },
});

export default TwoFAModal;
