import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import color from '../themes/color';
import { vw } from '../utils/dimensions';

const CameraSourceModal = ({
    visible,
    onSelect,
    onClose,
    title,
    text1,
    text2,
    text3,
    image1,
    image2,
    forward,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{title}</Text>

                        {text1 && (
                            <TouchableOpacity onPress={() => onSelect(text1)} style={styles.modalButton} activeOpacity={1}>
                                {image2 && <Image style={styles.image} source={image2} />}
                                <Text>{text1}</Text>
                                {forward && (
                                    <View style={styles.forwardi}>
                                        <Image style={styles.imagef} source={forward} />
                                    </View>
                                )}
                            </TouchableOpacity>
                        )}

                        {text2 && (
                            <TouchableOpacity onPress={() => onSelect(text2)} style={styles.modalButton} activeOpacity={1}>
                                {image1 && <Image style={styles.image} source={image1} />}
                                <Text>{text2}</Text>
                                {forward && (
                                    <View style={styles.forwardi}>
                                        <Image style={styles.imagef} source={forward} />
                                    </View>
                                )}
                            </TouchableOpacity>
                        )}

                        {text3 && (
                            <TouchableOpacity onPress={() => onSelect(text3)} style={styles.modalButton} activeOpacity={1}>
                                {image1 && <Image style={styles.image} source={image1} />}
                                <Text>{text3}</Text>
                                {forward && (
                                    <View style={styles.forwardi}>
                                        <Image style={styles.imagef} source={forward} />
                                    </View>
                                )}
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        color: color.black,
    },
    modalButton: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: color.greyish,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    imagef: {
        width: 5,
        height: 10,
    },
    forwardi: {
        paddingLeft: vw(200),
    },
});

export default CameraSourceModal;
