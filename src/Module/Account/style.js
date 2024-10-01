import { StyleSheet } from "react-native";
import color from "../../themes/color";
import { vh, vw, SCREEN_WIDTH } from '../../utils/dimensions';
const styles = StyleSheet.create({
    container: {
      backgroundColor: color.white,
      padding: 30,
    },
    verify:{position:'absolute',
      paddingLeft:vw(270),
      paddingTop:vh(23),
    },
    change:{position:'absolute',
      paddingLeft:vw(170),
      paddingTop:vh(23),
    },

    verifyText:{
      color:color.pink,
      fontWeight: '500',
      fontSize: 16,
      fontFamily:'Circular Std',

    },
    main: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginBottom: 10,
    },
    title: {
      alignItems: 'center',
      paddingRight: SCREEN_WIDTH - 280,
      paddingTop: 20,
      fontFamily: 'Circular Std',
      fontWeight: '500',
      fontSize: 20,
      color: color.blacktext,
    },
    ImageContainer: {
      paddingVertical: 17,
      paddingHorizontal: 17,
      backgroundColor: color.greyish,
      alignItems: 'center',
      borderRadius: 15,
    },
    image: {
      width: 10,
      height: 10,
    },
    profile: {
      width: vw(100),
      height: vh(100),
      borderRadius:100,
    },
    profileImageContainer: {
      flexDirection: "row",
      paddingTop: 20,
    },
    profileContainer: {
      backgroundColor: color.profile,
      borderRadius: 150,
      justifyContent: 'flex-start',
    },
    profileText: {
      paddingTop: 30,
      paddingLeft: 20,
    },
    profilepic: {
      fontSize: 14,
      fontWeight: '450',
      color: color.profilepic,
      fontFamily: 'Circular Std',
    },
    changeProfile: {
      color: color.pink,
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'Circular Std',
    },
    profilechangelink: {
      paddingTop: 5,
    },
    button: {
      backgroundColor: color.darkBlue,
    },
    inputFields: {
      paddingTop: 40,
    },
    input: {},
    phoneInputContainer: {
      flexDirection: 'row',
    },
    countryPickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: color.outlinedborder,
      borderWidth: 1,
      borderRadius: 18,
      paddingLeft:10,
      paddingRight:10,
      width: vw(80),
      height:vh(50),
      marginTop:10
    },
    flagText: {
      fontSize: 24,
    },
    callingCode: {
      fontSize: 16,
      marginRight: 10,
    },
    calendericon: {
      width: vw(20),
      height: vh(20),
    },
    calenderOpen: {
      position: 'absolute',
    
      paddingLeft:vw(290),
     
      paddingTop: 25,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      backgroundColor: color.lightGrey,
      width: '100%',
      alignItems: 'center',
      marginBottom: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    option: {
      paddingVertical: 10,
     marginBottom:5,
     padding:10,
     backgroundColor:color.greyish,
    },
    closeButton: {
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: color.Primary, 
      padding: 10,
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    
  });
  export default styles;