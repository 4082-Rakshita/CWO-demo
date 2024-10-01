
import { StyleSheet } from 'react-native';
import color from '../../themes/color';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: color.white,
   
    width:'100%'
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    resizeMode:'contain'
  },
  icon2: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    zIndex: 1,
    height: 52,
    paddingHorizontal: 0,
  
  },
  placeholder: {
    position: 'absolute',
    paddingLeft: 50,
    color: color.placeholderText,
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: color.transparent,
  },
  validationMessage: {
    color: color.errorRed,
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 20, 
    paddingHorizontal: 20,
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
  },

 
});

export default styles;
