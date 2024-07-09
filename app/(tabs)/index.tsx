import { View, StyleSheet, FlatList, SafeAreaView, Text, Pressable ,Platform} from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import tweets from '@/assets/data/tweets';
import Twitter from '../MainTweetPage';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.headerText}>Twitter</Text>
      </View>
      
      <View style={styles.container}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Twitter tweet={item} />}
          keyExtractor={(item) => item.id.toString()} 
        />
        <Pressable style={styles.plusButton}>
          <Link href={"/NewTweet"}  asChild>
          <Entypo name='plus' size={30} color="#efefef"/>
          </Link>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 25 : 0,  // Adding margin only for Android
  },
  headerText: {
    padding: 10,
    color: '#00bdfd',
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  plusButton: {
    backgroundColor: '#00bfff',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 35,
    bottom: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#181818',
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
  },
});
