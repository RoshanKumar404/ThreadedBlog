import { StyleSheet, Text, View, Image, TextInput, Pressable, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Link, useNavigation } from 'expo-router';

export default function NewTweet() {
  const [newTweets, setNewTweets]=useState('')
  const newTweet = {
    id: 't4',
    user: {
      id: 'u4',
      username: 'Ingineer Babu',
      name: 'Roshan',
      image: 'https://pbs.twimg.com/profile_images/1658392830451277827/hJPemLq4_400x400.jpg',
    },
    createdAt: '2024-08-27T12:00:00.000Z',
    content: "My Favourite leone 💓",
    postedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUMkXF4kGrqHjlNSWNpXml7jZ5mPLcTiqxg&s',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    share: 160,
    impressions: 50090,
  };
  const PostTheTweet=()=>{
    setNewTweets(newTweets)
    setNewTweets('')
    
console.warn("your tweet has been posted",newTweets);

NavgateToMainScreen.goBack()
  }
  const NavgateToMainScreen=useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tweetButtons}>  
            <Pressable style={{padding:5,borderRadius:15,backgroundColor:"#f2f2f2",borderWidth:2}}>
          <Link href={"../"}>Cancel</Link>
           </Pressable>
         <Pressable style={{padding:8,borderRadius:15,backgroundColor:"#00bdfd"}} onPress={PostTheTweet}>
        <Text style={{fontWeight:"bold",color:'#ffffff'}}>Tweet</Text>
         </Pressable>
      </View>

      <View style={styles.inputContainer}>
        <Image source={{ uri: newTweet.user.image }} style={styles.image} />
        <Text>New Tweet</Text>
      </View>
      <TextInput
      value={newTweets}
      onChangeText={(text)=>setNewTweets(text)}
        placeholder="What's happening?"
        multiline
         numberOfLines={7}
        style={styles.textInput}
        maxLength={300}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding:18
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textInput: {
    // flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    fontSize:18,
  },
  tweetButtons:{
    //flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10,
  }
});
