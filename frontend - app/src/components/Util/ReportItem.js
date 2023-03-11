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
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [
  {
    title: 'Medications',
    data: [
      'Essential medicines are those that san',
      'Essential medicines are those that san',
    ],
  },
  {
    title: 'Labs/Studies',
    data: [
      'Essential medicines are those that san',
      'Essential medicines are those that san',
    ],
  },
  {
    title: 'Vitals',
    data: ["{BP: 100}, {'Sugar Level': 150}"],
  },
  {
    title: 'Clinical Recommendations',
    data: ["Decrease Sugar containing foods","walk 1 hour everyday"],
  },
];

export default function ReportItem({naviagtion}) {
  const route = useRoute();

  let HpName = route.params;

  const navigation = useNavigation();

  const handlePress = item => {
    console.log('Item pressed:', item);
    //   navigation.navigate('ReportItem',item);
  };



  const RenderItem = ({item}) => {
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.ehrItemContainer}
          onPress={() => handlePress(item)}>
          <Text style={styles.ehrItemValue}>{item}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const RenderHPName = () => {
    return (
      <View style ={{alignItems: 'center'}}>
        <Text style={{fontSize:25,fontWeight: 'bold',color: '#2735AD'}}>{HpName}</Text>
      </View>
    );
  };
  return (
    <View>
      <RenderHPName />
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <RenderItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style ={{alignItems: 'center',marginTop: 20}}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}
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
  header: {
    fontSize: 23,
    fontWeight: 900,
    color: '#000000',
    alignContent:'center'
  },
});
