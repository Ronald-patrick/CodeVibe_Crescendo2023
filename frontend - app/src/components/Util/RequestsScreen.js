import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import RequestsItem from './RequestsItem';

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

export default function RequestsScreen() {
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
