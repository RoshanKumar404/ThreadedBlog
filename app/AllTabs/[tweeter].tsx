import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Twitter from '../trial'
import tweets from '@/assets/data/tweets'
import { useLocalSearchParams,useGlobalSearchParams } from 'expo-router'
export default function tweeterr() {
  const {tweeter}=useLocalSearchParams();
  console.log(tweeter);
  
  return (
    
    <Twitter tweet={tweets[5]} />
  )
}

const styles = StyleSheet.create({})