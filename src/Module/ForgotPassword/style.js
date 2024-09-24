import { StyleSheet } from "react-native";
import color from "../../themes/color";
import { screenHeight } from '../../constants/Scaling';
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.blurrhead,
    },
    mainContent: {
        padding:30,
        paddingLeft: 30,
    },
    text1: {
        fontWeight: '700',
        fontSize: 24,
        color: color.black,
    },
   
     buttontext: { paddingLeft:30,
        paddingRight:30,
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: screenHeight * 0.68779342723 
    },
    text2: {
        color:color.text,
        fontWeight: '400',
        fontSize: 15,
    },
    errorInput: {
        borderColor: color.erroricon,
        borderWidth: 1,
    },
    errorIcon: {
        tintColor: color.erroricon, 
    },
    back: {
        width: 20,
        height: 20,
    },
    logoContainer: {
        backgroundColor:color.white,
        padding: 10,
        height: 40,
        width: 40,
        borderRadius: 5,
    },
    contentContainer: {
        flex: 1,
       marginTop:-40, 
       backgroundColor:color.Secondary
  
    },
    buttonContainer: {
        paddingBottom: 20,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:color.Secondary
       
    },
    ArrowContainer: {
        padding: 30,
    }
});

export default styles;
