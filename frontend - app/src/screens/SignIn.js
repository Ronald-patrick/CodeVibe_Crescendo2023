import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/logo.png';
import {TextInput, Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import CustomButton from '../components/Util/CustomButton';
import CustomInput from '../components/Util/CustomInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
var qs = require('qs');

import axios from 'axios';

export default function SignIn({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

  const onSignInPressed = ()=>{
    navigation.navigate('OTPScreen')
}
  const validatePhoneNumber = phoneNumber => {
    const pattern = /^\d{10}$/; // Matches a 10-digit phone number
    return pattern.test(phoneNumber);
  };

  const handlePhoneNumberChange = phoneNumber => {
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
    setIsValidPhoneNumber(validatePhoneNumber(phoneNumber));
  };

  const loginUser = async () =>{      
    const res = await axios.post("http://localhost:5000/api/patient/login",{
      phone_number : "8299263986"    })

    console.log(res.data);
      
}

  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        {isValidPhoneNumber && (
          <Icon name="check-circle" size={20} color="green" />
        )}
      </View>
      <CustomButton text="Sign In" onPress={() => onSignInPressed()}>
        Login
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    width: '70%',
    maxWidth: 400,
    maxHeight: 300,
    height: '70%',
    marginTop: 60,
    marginBottom: 25,
  },
  
  input: {
    fontSize: 16,
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
});
