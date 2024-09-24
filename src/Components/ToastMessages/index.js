// ToastConfig.js
import React, { forwardRef } from 'react';
import { Image } from 'react-native';
import Toast, { ErrorToast } from 'react-native-toast-message';
import { Icons } from '../../assets';
import color from '../../themes/color';

const toastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: color.errorRed, backgroundColor: color.errorRed, height: 70, color: color.white }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 13,
        fontWeight: '500',
        color: color.white,
      }}
      renderLeadingIcon={() => (
        <Image
          source={Icons.Alert}
          style={{ width: 24, height: 24, marginTop: 22, marginLeft: 4 }}
        />
      )}
    />
  ),
};

const ToastComponent = forwardRef((props, ref) => {
  return (
    <Toast
      config={toastConfig}
      ref={ref}
      visibilityTime={2000} 
      autoHide={true} 
      animationType="slide" 
      topOffset={10}
    />
  );
});

export default ToastComponent;
