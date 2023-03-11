import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import RequestsItem from './RequestsItem';
import axios from 'axios';
const data = [
  {id: '1', PH1Name: 'Item 1', PHPhone: 'Phone 1', PH2Name: 'Item 2'},
  {id: '2', PH1Name: 'Item 1', PHPhone: 'Phone 1', PH2Name: 'Item 2'},
  {id: '3', PH1Name: 'Item 1', PHPhone: 'Phone 1', PH2Name: 'Item 2'},
  {id: '4', PH1Name: 'Item 1', PHPhone: 'Phone 1', PH2Name: 'Item 2'},
  {id: '5', PH1Name: 'Item 1', PHPhone: 'Phone 1', PH2Name: 'Item 2'},
];

const renderItem = ({item,setData}) => (
  //   <View style={styles.item}>
  //     <Text>{item.title}</Text>
  //   </View>
  <View>
    <RequestsItem item={item} setData={setData}/>
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

export default function RequestsScreen({navigation}) {
  const [data, setData] = useState([]);

  const refreshData = async()=>{
    setData([]);
    demo();
  }

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

    console.log('requests apge: ', res.data.requests);
    let ls = res.data.requests;
    let d = [];
    for (let i = 0; i < ls.length; i++) {
      d.push({id:ls[i].id, name: ls[i].name,address: ls[i].address,phone_number: ls[i].phone_number});
    }
    console.log('d: ', d);
    setData(ls);
  };
  useEffect(() => {
    demo();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <RequestsItem item={item} refreshData={refreshData}/>}
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
