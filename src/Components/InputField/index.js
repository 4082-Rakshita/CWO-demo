// import React from 'react';
// import { View, TextInput, Image, Text, Animated, TouchableOpacity } from 'react-native';
// import styles from './style';
// import color from '../../themes/color';

// export default class CustomInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFocused: false,
//     };
//     this.placeholderTop = new Animated.Value(props.value ? 0 : 20);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.value !== this.props.value) {
//       this.placeholderTop.setValue(this.props.value ? 0 : 20);
//     }
//   }

//   handleFocus = () => {
//     this.setState({ isFocused: true });
//     this.placeholderTop.setValue(0);
//   };

//   handleBlur = () => {
//     this.setState({ isFocused: false });
//     if (!this.props.value) {
//       this.placeholderTop.setValue(20);
//     }
//   };

//   handleChangeText = (text) => {
//     if (this.props.onChangeText) {
//       this.props.onChangeText(text);
//     }
//   };

//   render() {
//     const { icon, icon2, placeholder, value, error, showError, secureTextEntry, onPressIcon, ...props } = this.props;
//     const { isFocused } = this.state;

//     return (
//       <View style={styles.container}>
//         <View style={[styles.inputContainer, { borderColor: showError ? color.errorRed : color.white }]}>
          
//           {icon && <Image source={icon} style={styles.icon} />}

//           <TextInput
//             {...props}
//             style={[styles.input, icon && { paddingLeft: 20 }]}
//             onFocus={this.handleFocus}
//             onBlur={this.handleBlur}
//             onChangeText={this.handleChangeText}
//             value={value}
//             placeholder=" "
//             cursorColor={color.cursor}
//             secureTextEntry={secureTextEntry}
//           />

//           {icon2 && (
//             <TouchableOpacity onPress={onPressIcon}>
//               <Image source={icon2} style={styles.icon2} />
//             </TouchableOpacity>
//           )}
         
//           <Animated.Text 
//             style={[
//               styles.placeholder, 
//               {
//                 top: this.placeholderTop, 
//                 position: 'absolute', 
//               }
//             ]}
//             pointerEvents="none" 
//           >
//             {placeholder}
//           </Animated.Text>
//         </View>
//         {showError && error && (
//           <Text style={styles.validationMessage}>{error}</Text>
//         )}
//       </View>
//     );
//   }
// }




import React from 'react';
import { View, Animated, TouchableOpacity, Text, Image } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper'; 
import styles from './style';
import color from '../../themes/color';


export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.placeholderTop = new Animated.Value(props.value ? 0 : 20);
  }

  
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.placeholderTop.setValue(this.props.value ? 0 : 20);
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
    this.placeholderTop.setValue(0);
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
    if (!this.props.value) {
      this.placeholderTop.setValue(20);
    }
  };

  handleChangeText = (text) => {
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  };

  render() {
    const { icon, icon2, placeholder, value, error, showError, secureTextEntry, onPressIcon, ...props } = this.props;
    const { isFocused } = this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.inputContainer, { borderColor: showError ? color.errorRed : color.white }]}>
          {icon && <Image source={icon} style={styles.icon} />}

          <PaperInput
            {...props}
            label={placeholder}
            value={value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={this.handleChangeText}
            secureTextEntry={secureTextEntry}
            error={showError}
            underlineColor="transparent"
            onSubmitEditing={this.props.onSubmitEditing}
            ref={this.props.forwarededref}
            activeUnderlineColor={showError?color.errorRed:color.black}
            theme={{
              colors:{
                error:color.errorRed
              }
            }}
            underlineStyle={{
              display: 'none',
              }}
            style={[
              styles.input,
              icon && { paddingLeft: 20 },
              { backgroundColor: 'white',} 
            ]}
          />

          {icon2 && (
            <TouchableOpacity onPress={onPressIcon}>
              <Image source={icon2} style={styles.icon2} />
            </TouchableOpacity>
          )}
        </View>
        {showError && error && (
          <Text style={styles.validationMessage}>{error}</Text>
        )}
      </View>
    );
  }
}
