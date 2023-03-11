import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StripeProvider} from '@stripe/stripe-react-native';
import RazorpayCheckout from 'react-native-razorpay';
import CustomButton from './CustomButton';

// const data = [
//   {
//     title: 'Medications',
//     data: [
//       'Essential medicines are those that san',
//       'Essential medicines are those that san',
//     ],
//   },
//   {
//     title: 'Labs/Studies',
//     data: [
//       'Essential medicines are those that san',
//       'Essential medicines are those that san',
//     ],
//   },
//   {
//     title: 'Vitals',
//     data: ["{BP: 100}, {'Sugar Level': 150}"],
//   },
//   {
//     title: 'Clinical Recommendations',
//     data: ['Decrease Sugar containing foods', 'walk 1 hour everyday'],
//   },
// ];

export default function ReportItem() {
  const route = useRoute();

  const [data, setData] = useState([]);

  let item = route.params;

  const navigation = useNavigation();

  const handlePress = item => {
    console.log('Item pressed:', item);
  };

  const demo = () => {
    ls = [
      {title: 'Symptoms', data: item.symptoms},
      {title: 'comments', data: [item.comments]},
    ];
    console.log('ddd: ', ls);
    setData(ls);
  };
  useEffect(() => {
    demo();
  }, []);

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

  const payNow = async () => {
    const email = 'rajhmourya@gmail.com';
    const name = 'Raj Harindar Mourya';
    const mobile = '8299263986';
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_A4j1ssVWbDOmcE',
      amount: 100 * 13000,
      name: 'CodeVibe',
      order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: email,
        contact: mobile,
        name: name,
      },
      theme: {color: '#EC9912'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        console.log('success: ', data);
      })
      .catch(error => {
        // handle failure
        console.log('failure: ', error);
      });
  };

  const RenderHPName = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#2735AD'}}>
          {item.reportBy}
        </Text>
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
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
      {/* <TouchableOpacity
        style={styles.ehrItemContainer}
        onPress={() => payNow()}>
        <Text >payNow</Text>
      </TouchableOpacity> */}

      <CustomButton text="Pay Now" onPress={() => payNow()}>
        Login
      </CustomButton>
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
    alignContent: 'center',
  },
});
