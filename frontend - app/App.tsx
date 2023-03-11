import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignIn from './src/screens/SignIn'
import Navigation from './src/components/Util/Navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  }
,})