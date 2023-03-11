import { View,StyleSheet, Text } from 'react-native'
import React from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function OTPScreen({navigation}) {
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginVertical: 20 }}>Enter OTP</Text>
        <OTPInputView
            pinCount={4}
            editable={true}
            style={{ width: '80%', height: 100 }}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
                navigation.navigate("Home")
            }}
        />
    </View>

    </KeyboardAwareScrollView>



  )
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
  