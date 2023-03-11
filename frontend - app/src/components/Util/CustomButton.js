import { View, Text,StyleSheet,Pressable,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CustomButton({onPress,text,type="PRIMARY",bgColor,fgColor}) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor?{backgroundColor:bgColor}:{}
            ]} >
            <Text 
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor?{foregroundColor:fgColor}:{}
                ]}>{text}</Text>
        </TouchableOpacity>
      );
}

const styles=StyleSheet.create({
    container:{
        width:"100%",
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:10,
       
        
    },
    container_PRIMARY: {
        backgroundColor:'#2735AD',
    },
    container_SECONDARY:{
        backgroundColor:'white',
    },
    container_TERTIARY: {
        
    },
    container_QUATERNARY: {
        borderColor:'#3B71F3',
        borderWidth:2
    },
    container_QUINARY:{
        backgroundColor:'#FFB319',
        borderWidth:2,
        borderColor:"#FFB319",
    },
    container_QUINARY_1:{
        borderColor:'#FFB319',
        borderWidth:2,
    },
    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:15,
    },
    text_SECONDARY:{
        color: 'gray',
        fontWeight:'400'
    },
    text_TERTIARY:{
        color: 'gray'
    },
    text_QUATERNARY:{
        color:'#3B71F3'
    },
    text_QUINARY:{
        color:'white',
    },
    text_QUINARY_1:{
        color:'#FFB319',
    }
});