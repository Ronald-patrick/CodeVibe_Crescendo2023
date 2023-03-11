import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center",justifyContent: "space-between",marginBottom:10}}>
      <HeaderButton
        text="Reports"
        btnColor="#0b48a3"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        
      />
      <HeaderButton
        text="Requests"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "#2735AD" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      marginRight:5,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
       
    fontSize: 16,
      }}
    >
    {props.text}
    </Text>
  </TouchableOpacity>
);