import { StyleSheet } from "react-native"
import color from '../../themes/color';
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TopNav: {
      backgroundColor: color.Primary,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 20,
    },
    rightNav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
    },
    welcText: {
      fontSize: 20,
      color: color.white,
      fontWeight: '300',
    },
    name: {
      fontSize: 20,
      fontWeight: '600',
      color: color.white,
    },
    iconContainer: {
      backgroundColor: color.iconContainer,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    iconstyle: {
      height: 25,
      width: 25,
    },
    bodyContainer: {
      paddingHorizontal: 10,
      paddingTop: 20,
      backgroundColor: color.Secondary,
      flex: 1,
      paddingLeft:20,
      paddingRight:20,
    },
    frequentlyContner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom:20,
    },
    notification: {
      paddingBottom: 20,
    },
    heading: {
      fontSize: 12,
      fontWeight: '600',
      paddingBottom: 10,
    },
    activitiesContainer: {
      backgroundColor: color.white,
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
  })
  export default styles;