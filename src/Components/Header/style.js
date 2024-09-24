import { StyleSheet } from "react-native";
import color from "../../themes/color";

const styles = StyleSheet.create({
  

    logoContainer: {
        paddingLeft: 30,
        // paddingBottom: 30,

        marginTop: 60,
    },
    qlogo: {
        width: 60,
        height: 40,
    },
    text1: {
        fontSize: 28,
        fontWeight: '800',
        color: color.headertext,
    },
    text2: {
        fontSize: 17,
        fontWeight: '400',
        color: color.headertext,
    },
    textcontainer: {
        paddingTop: 20,
        paddingBottom: 30,
    },
    line: {
        width: 60,
        borderWidth: 1,
        borderColor: color.white,
        opacity: 0.3

    },
    bottom: {
        flexDirection: 'row',
        paddingTop: 40,

    },
    icon: {
        width: 15,
        height: 15,
    },
    textFlex: {
        paddingRight: 40,
    },
    texticon: {
        flexDirection: 'row'
    },
    text: {
        color: color.headertext,
        fontSize: 13,
        fontWeight: '400',
    },
    imagebtn:
    {
        paddingRight: 10,
        paddingTop: 15
    }

});

export default styles;
