import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Replace with your API call
// const data = [
//   {
//     title: 'Main dishes',
//     data: [
//       'Leelvati',
//       'BabaSaheb Gawde',
//       'Dr. Patel',
//       'Amravati Hospital',
//       'Leelvati',
//       'BabaSaheb Gawde',
//       'Dr. Patel',
//       'Amravati Hospital',
//       'Leelvati',
//       'BabaSaheb Gawde',
//       'Dr. Patel',
//       'Amravati Hospital',
//     ],
//   },
// ];

import axios from 'axios';

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

const Reports = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();
  const demo = async () => {
    let tokenGot = await _retrieveData();

    const config = {
      headers: {Authorization: `Bearer ${tokenGot}`},
    };

    //   console.log(config);
    const res = await axios.post(
      'http://localhost:5000/api/patient/get-reports',
      {},
      config,
    );
    console.log('reports : ', res.data.reports);
    let d =  {
      title: 'reports',
      data: res.data.reports,
    }
    setData([
      d
    ]);
    console.log("data here ",d);
  };

  useEffect(() => {
    demo();
  }, []);
  const handlePress = item => {
    console.log('Item pressed:', item);
    navigation.navigate('ReportItem', item);
  };

  const RenderItem = ({item}) => {
    console.log("repor raj: ",item);
    return (
      <TouchableOpacity
        style={styles.ehrItemContainer}
        onPress={() => handlePress(item)}>
        <Text style={styles.ehrItemValue}>{item.reportBy}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <RenderItem item={item} />}
    />
  );
};
const styles = StyleSheet.create({
  ehrItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ehrItemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ehrItemValue: {
    fontSize: 16,
  },
});

export default Reports;
