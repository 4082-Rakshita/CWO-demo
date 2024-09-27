import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import string from '../../string'; // Ensure you have the required strings
import CustomInput from '../../Components/InputField';
import { Icons } from '../../assets';
import color from '../../themes/color';
import { vw } from '../../utils/dimensions';
import CustomButton from '../../Components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CountryPicker } from 'react-native-country-codes-picker';
import Toast from 'react-native-toast-message';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CameraSourceModal from '../../Components/CameraSourceModal';
import styles from './style';

const AccountScreen = ({ navigation }) => {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [flag, setFlag] = useState('🇺🇸');
  const [profileImage, setProfileImage] = useState(null);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    date: '',
    gender: '',
  });

  useEffect(() => {
    setSelectedStartDate(null);
    setGender('');
  }, []);

  const handleBack = () => {
    navigation.navigate('HomeScreen');
  };

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedStartDate(date);
    }
    setCalendarVisible(false);
  };

  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const onSelect = (country) => {
    if (country && country.code && country.dial_code) {
      setCountryCode(country.code);
      setCallingCode(country.dial_code.replace('+', ''));
      setFlag(country.flag);
      setShowPicker(false);
    }
  };

  const validation = (value) => {
    const filteredValue = value.replace(/[^0-9]/g, '');
    setPhoneNumber(filteredValue);
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = { name: '', username: '', email: '', phoneNumber: '', date: '', gender: '' };

    if (!name.trim()) {
      newErrors.name = string.nameNeeded;
      isValid = false;
    }

    if (!username.trim()) {
      newErrors.username = string.usernameNeeded;
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = string.emailempty;
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = string.invalidemailformat;
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = string.phoneNumberNeeded; // Ensure this string is defined
      isValid = false;
    }

    if (!selectedStartDate) {
      newErrors.date = string.dateNeeded; // Ensure this string is defined
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = string.genderNeeded; // Ensure this string is defined
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePhone = () => {
    if (!validateFields()) return;

    const existingPhoneNumber = '1234567890';

    if (phoneNumber === existingPhoneNumber) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'User already exists',
      });
    } else {
      setPhoneNumber('');
    }
  };

  const handleProfilePicPress = () => {
    setCameraModalVisible(true);
  };

  const handleImagePick = (source) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    const handleResponse = (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        const imageUri = response.assets[0].uri;
        setProfileImage(imageUri);
        setCameraModalVisible(false);
      }
    };

    if (source === 'camera') {
      launchCamera(options, handleResponse);
    } else {
      launchImageLibrary(options, handleResponse);
    }
  };

  const openGenderModal = () => {
    setGenderModalVisible(true);
  };

  const selectGender = (selectedGender) => {
    setGender(selectedGender);
    setGenderModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <TouchableOpacity onPress={handleBack} style={styles.ImageContainer}>
            <Image source={Icons.backArrow} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.title}>{string.editProfile}</Text>
        </View>

        <View style={styles.profileImageContainer}>
          <View style={styles.profileContainer}>
            <Image style={styles.profile} source={profileImage ? { uri: profileImage } : Icons.profile} />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profilepic}>{string.profilepic}</Text>
            <TouchableOpacity style={styles.profilechangelink} onPress={handleProfilePicPress}>
              <Text style={styles.changeProfile}>{string.changeprofile}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputFields}>
          <CustomInput
            mode='outlined'
            placeholder='Name'
            value={name}
            error={errors.name}
            showError={!!errors.name}
            onChangeText={text => {
              setName(text);
              setErrors(prev => ({ ...prev, name: '' }));
            }}
          />

          <CustomInput
            mode='outlined'
            placeholder='Username'
            value={username}
            error={errors.username}
            showError={!!errors.username}
            onChangeText={text => {
              setUsername(text);
              setErrors(prev => ({ ...prev, username: '' }));
            }}
          />

          <View>
            <View style={{ position: 'relative' }}>
              <CustomInput
                mode='outlined'
                placeholder='Birthday'
                value={selectedStartDate ? selectedStartDate.toLocaleDateString() : ''}
                editable={false}
                error={errors.date}
                showError={!!errors.date}
              />
            </View>
            <TouchableOpacity onPress={openCalendar} style={styles.calenderOpen}>
              <Image source={Icons.calendericon} style={styles.calendericon} />
            </TouchableOpacity>
           
          </View>

          <TouchableOpacity onPress={openGenderModal} style={styles.genderInput}>
            <CustomInput
              mode='outlined'
              placeholder='Gender'
              value={gender}
              editable={false}
              error={errors.gender}
              showError={!!errors.gender}
            />
          </TouchableOpacity>
       

          <View style={styles.phoneInputContainer}>
            <TouchableOpacity style={styles.countryPickerContainer} onPress={togglePicker}>
              <Text style={styles.flagText}>{flag}</Text>
              <CountryPicker
                show={showPicker}
                pickerButtonOnPress={onSelect}
                onBackdropPress={togglePicker}
              />
              <Text style={styles.callingCode}>+{callingCode}</Text>
            </TouchableOpacity>

            <View style={{ width: vw(233), marginLeft: 5 }}>
              <CustomInput
                mode='outlined'
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={validation}
                keyboardType="numeric"
                error={errors.phoneNumber}
                showError={!!errors.phoneNumber}
              />
             
            </View>
          </View>

          <CustomInput
            mode='outlined'
            placeholder='Email'
            value={email}
            error={errors.email}
            showError={!!errors.email}
            onChangeText={text => {
              setEmail(text);
              setErrors(prev => ({ ...prev, email: '' }));
            }}
          />

          <CustomButton title={string.Update} style={styles.button} onPress={handlePhone} />
        </View>

        {calendarVisible && (
          <DateTimePicker
            value={selectedStartDate || new Date()}
            mode={mode}
            display="default"
            onChange={handleDateChange}
          />
        )}

         <CameraSourceModal
          visible={cameraModalVisible}
          onSelect={handleImagePick}
          onClose={() => setCameraModalVisible(false)}
          title="Select Source"
          text1="Gallery"
          text2="Camera"
          image1={Icons.onCamera}
          image2={Icons.onGallery}
          forward={Icons.forward}
        />


        <CameraSourceModal
          visible={genderModalVisible}
          onSelect={selectGender}
          onClose={() => setGenderModalVisible(false)}
          title={string.selectGender}
          text1={string.male}
          text2={string.female}
          text3={string.other}
        />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
