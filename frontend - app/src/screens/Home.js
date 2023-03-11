import { View, Text,StyleSheet ,ScrollView, TouchableOpacity,Dimensions,StatusBar, Image} from 'react-native'
import React, { useEffect, useState } from "react";
import HeaderTabs from '../components/Util/HeaderTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import Reports from '../components/Util/Reports';
import RequestsScreen from '../components/Util/RequestsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


_retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log("inside func",value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);

    }
  };

export default function Home() {
    
    const [activeTab, setActiveTab] = useState("Reports");
    const demo = async ()=>{
        let tokenGot =  await  _retrieveData();
        console.log("look here 123",tokenGot);
    }

    demo();
    const screenOptions = {
        headerShown: false,
    };
  return (
    <SafeAreaView style={{ backgroundColor: "#e9ebf7", padding: 15,flex:1 }} >
        <View>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        {activeTab==="Reports"?<>
            <Reports/>
        </>:<>
        <RequestsScreen/>
        </>}
    </SafeAreaView>
  )
}