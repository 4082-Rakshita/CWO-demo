import { StyleSheet } from "react-native";
import { screenHeight } from '../../constants/Scaling';
import color from "../../themes/color";
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.placeholderText,
    },
    mainContent: {
        padding: 30,
        paddingLeft: 40,
    },
    text1: {
        fontWeight: '700',
        fontSize: 24,
        color: color.text,
    },
    text2: {
        color: color.text,
        fontWeight: '400',
        fontSize: 15,
    },
    buttontext: { paddingLeft:30,
        paddingRight:30,
        flexDirection: 'column', 
        justifyContent: 'space-between',
         height: screenHeight * 0.68779342723 
    },
    errorBanner: {
        backgroundColor: color.errorBanner,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    errorText: {
        color: color.erroricon,
        fontWeight: '600',
    },
    logo: {
        width: 75,
        height: 50,
    },
    logoContainer: {
        paddingTop: 20,
        paddingBottom: 40,
    },
    contentContainer: {
        flex: 1,
        backgroundColor:color.Secondary,
    },
    buttonContainer: {
        paddingBottom: 20,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:color.Secondary,
        
    },
    
});

export default styles;
