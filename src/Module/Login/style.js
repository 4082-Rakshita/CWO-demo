import { StyleSheet } from "react-native";
import color from "../../themes/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      position:'relative'
    },
    header: {
        zIndex: 1000,
        paddingBottom: 20,
        width: '100%',
    },
    mainContent: {
       
        backgroundColor: color.Secondary,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom:120,
        position:'absolute',
        left:0,
        right:0,
        bottom:0
    },
    text1: {
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 8,
        color:color.heading,
    },
    text2: {
        color: color.text,
        fontWeight: '400',
        fontSize: 15,
        marginBottom: 20,
        color:'#4F5F72'
    },
    forgot: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        paddingBottom: 33,
        paddingTop: 10,
    },
    forgotText: {
        fontSize: 14,
        fontWeight: '600',
        color: color.forgotbtn,
    },
});

export default styles;
