import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Twitter from '../trial'
import tweets from '@/assets/data/tweets'
import { useLocalSearchParams,useGlobalSearchParams } from 'expo-router'
export default function tweeterr() {
  const {tweeter}=useLocalSearchParams();
  console.log(tweeter);
  
  const tweet= tweets.find((t)=>t.id===tweeter)
  if(!tweet){
    return<Text>Tweet {tweeter} not found </Text>
  }
  return (
    
    <Twitter tweet={tweet} />
  )
}

const styles = StyleSheet.create({})