import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import RequestsItem from './RequestsItem';
import axios from 'axios';
const data = [
  {id: '1', PH1Name: 'Item 1',PHPhone: 'Phone 1',PH2Name: 'Item 2'},
  {id: '2', PH1Name: 'Item 1',PHPhone: 'Phone 1',PH2Name: 'Item 2'},
  {id: '3', PH1Name: 'Item 1',PHPhone: 'Phone 1',PH2Name: 'Item 2'},
  {id: '4', PH1Name: 'Item 1',PHPhone: 'Phone 1',PH2Name: 'Item 2'},
  {id: '5', PH1Name: 'Item 1',PHPhone: 'Phone 1',PH2Name: 'Item 2'},
];

const renderItem = ({item}) => (
//   <View style={styles.item}>
//     <Text>{item.title}</Text>
//   </View>
<View>
    <RequestsItem item = {item}/>
</View>
);


_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      // We have data!!
      console.log('inside func', value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
};

export default function RequestsScreen() {

  const [data, setData] = useState([]);


  const demo = async () => {
    let tokenGot = await _retrieveData();

    const config = {
      headers: {Authorization: `Bearer ${tokenGot}`},
    };

    //   console.log(config);
    const res = await axios.post(
      'http://localhost:5000/api/patient/get-requests',
      {},
      config,
    );
    console.log("requests apge: ",res.data)
    // setData(ls);
  };
  useEffect(() => {
   demo();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
