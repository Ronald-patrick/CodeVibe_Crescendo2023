import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StripeProvider } from '@stripe/stripe-react-native';

const RequestsItem = ({item}) => {

  const handleIconClick = (type)=>{
    console(type);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* your card content goes here */}
        <Text style={{color:'#2735AD'}}>Has Requested to access your EHR</Text>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
        <Text>{item.phone_number}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="close" size={24} color="white" style={styles.denyButton} onPress={()=>handleIconClick('deny')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="check"
            size={24}
            color="white"
            onPress={()=>handleIconClick('allow')}
            style={styles.allowButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:5
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    alignContent:'center',
    justifyContent: 'center',
    
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 8,
    marginLeft: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 10,
    },
   
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  denyButton: {
    color: 'red',
  },
  allowButton: {
    color: 'green',
  },
  allowIcon: {
    backgroundColor: 'green'
  }
  ,
  denyIcon: {
    backgroundColor: 'red'
  }
});

export default RequestsItem;
