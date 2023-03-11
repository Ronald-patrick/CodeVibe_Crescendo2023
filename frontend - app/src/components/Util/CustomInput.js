import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomInput({value,setValue,placeholder,keyboardType="default"}) {
  return (
    <View style={styles.container}>
        <TextInput 
        value={value} 
        onChangeText={setValue} 
        placeholder={placeholder} 
        style={styles.input}
        keyboardType={keyboardType}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        height:50,
        borderColor:'#E8E8E8',
        borderWidth:1,
        borderRadius:5,
        padding:5,
        marginVertical:5,
    },
    input:{
        fontSize:17,
    },
})