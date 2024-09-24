import { StyleSheet } from "react-native";
import { screenHeight } from '../../constants/Scaling';
import color from "../../themes/color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.blurrhead,
  },

  contentContainer: {
  flex: 1,
   marginTop:-40, 
   backgroundColor:color.Secondary

},
mainContent: {
  paddingLeft: 10,
  paddingRight:10,
},
  
  flagIcon: {
    width: 15,
    height: 10,
    alignItems: 'center',
  }, 

  title: {
    fontSize: 24,
    fontWeight: '700',
    color:color.modal2fa,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    color: color.text,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  phoneInputContainer: {
    paddingLeft:10,
    paddingRight:10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    
  },
  countryPickerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  
    paddingHorizontal: 15,
    backgroundColor: color.white,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 10,
    height: 60,
  },
  flagText: {
    fontSize: 20,
  },
  phoneInputBox: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: color.white,
    height:60,
  },
  callingCode: {
    fontSize: 18,
    marginRight: 10,
  
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontWeight: "500",
    color: color.placeholderText,
    backgroundColor: color.text
  },
  resetButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: color.transparent,
    padding: 10,
  },
  resetIcon: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    paddingBottom: 20,
    paddingLeft:30,
    paddingRight:30,
    verticalAlign:'bottom',
    backgroundColor:color.Secondary,

    
},
});
  
  export default styles;
  