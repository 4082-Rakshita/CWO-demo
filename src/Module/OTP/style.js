import { StyleSheet } from "react-native";
import color from "../../themes/color";
const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: color.blurrhead,
    },
    container: {
      flex: 1,
      padding: 30,
      paddingTop: 0,
      backgroundColor:color.blurrhead
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      paddingTop: 20,
      marginBottom: 10,
      color: color.modal2fa,
    },
    description: {
      fontSize: 16,
      color: color.text,
      marginBottom: 20,
    },
    text2: {
      color: color.text,
      fontWeight: '400',
      fontSize: 15,
    },
    phoneNumber: {
      fontSize: 15,
      fontWeight: '700',
      color: color.text,
    },
    codeInputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    codeInput: {
      width: 60,
      height: 50,
      borderWidth: 1,
      borderColor: color.codeinput,
      borderRadius: 10,
      textAlign: 'center',
      fontSize: 20,
      backgroundColor: color.white,
    },
    resendButton: {
      marginBottom: 20,
    },
    resendText: {
      textAlign: 'right',
      color:color.forgotbtn,
      fontSize: 14,
      fontWeight: '600',
    },
    confirmButton: {
      backgroundColor: color.confirmbtn,
      paddingVertical: 12,
      borderRadius: 5,
      width: '100%',
    },
    errorText: {
      color: color.errorRed,
      textAlign: 'center',
      marginBottom: 10,
    },
    Inputcontainer: {
      backgroundColor: color.white,
      paddingVertical: 5,
      borderRadius: 8,
    
      borderWidth:1,
    },
    otpInput: {
      borderRightWidth: 1,
      height: 40,
      borderBottomWidth: 0,
      textAlign: 'center',
      fontSize: 18,
      margin: 5,
     
    },
  });
  
 export default styles;
  