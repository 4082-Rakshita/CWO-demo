import { StyleSheet } from "react-native";
import color from "../../themes/color";
const styles = StyleSheet.create({
  main: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonContainer: {
    borderRadius: 5,
    paddingVertical: 13,
    borderRadius: 5,
  },

  button: {
    backgroundColor: color.Primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: color.Primary,
    opacity:0.4,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color:color.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },




});

export default styles;
