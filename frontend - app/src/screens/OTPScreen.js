import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OTPScreen({navigation, route}) {
  console.log('otpscreen: ', route.params);
  const {phone_number} = route.params;
  console.log('otpscreen: ', phone_number);


  _storeData = async (token) => {
    try {
      await AsyncStorage.setItem(
        'token',
        token,
      );
    } catch (error) {
      // Error saving data
    }
  };

  
  

  const verifyOtp = async code => {
    console.log('otpscreen:---', code, phone_number);
    const res = await axios.post(
      'http://localhost:5000/api/patient/otpVerify',
      {
        phone_number: phone_number,
        otp: code,
      },
    );

    
    console.log(res.data);
    console.log("otp screen : ----  --",res.data.token);
    await _storeData(res.data.token);
    let tokenGot = await _retrieveData();
    console.log("look here ",tokenGot);

    if (res.status === 200) {
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAwareScrollView >
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, marginVertical: 20}}>Enter OTP</Text>
        <OTPInputView
          pinCount={6}
          editable={true}
          style={{width: '80%', height: 100}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={async code => {
            await verifyOtp(code);
            // console.log(`Code is ${code}, you are good to go!`);
            // navigation.navigate("Home")
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: '#000',
    fontSize: 16,
  },
  underlineStyleHighLighted: {
    borderColor: '#2735AD',
  },
});
