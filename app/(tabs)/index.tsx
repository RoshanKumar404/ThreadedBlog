import { Image, StyleSheet, Platform,SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import tweets from '@/assets/data/tweets';
export default function HomeScreen() {

  const tweet= tweets[1]
  return (
    
    <ThemedView style={styles.Container}>
      <Image src={tweet.user.image} style={styles.Imagecontainer}/>
      <ThemedView style={styles.datacontainer}>
       <ThemedText  style={{fontWeight:"bold"}}>
        {tweet.user.username}
       </ThemedText>
       <ThemedText>{tweet.content}</ThemedText>
       </ThemedView>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent:"center",
    flexDirection:"row",
    padding:12,
    borderBottomWidth:1,
    borderColor:"gray"
  },
  datacontainer:{
    flex: 1,
    alignItems:'flex-start',
    justifyContent:"center",
    marginLeft:10
  },
  Imagecontainer:{
    width:80,height:80,borderRadius:45
  }
});
