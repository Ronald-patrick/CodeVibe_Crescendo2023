import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
// Replace with your API call
const data = [
  {
    title: 'Main dishes',
    data: [
      'Leelvati',
      'BabaSaheb Gawde',
      'Dr. Patel',
      'Amravati Hospital',
      'Leelvati',
      'BabaSaheb Gawde',
      'Dr. Patel',
      'Amravati Hospital',
      'Leelvati',
      'BabaSaheb Gawde',
      'Dr. Patel',
      'Amravati Hospital',
    ],
  },
];
const Reports = () => {
    const navigation = useNavigation();

  const handlePress = (item) => {
    console.log('Item pressed:', item);
    navigation.navigate('ReportItem',item);
  };

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.ehrItemContainer}
        onPress={() => handlePress(item)}>
        <Text style={styles.ehrItemValue}>{item}</Text>
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
