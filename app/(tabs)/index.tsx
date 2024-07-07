import { View,Image, StyleSheet,FlatList, Platform,SafeAreaView,Text } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
//import { View } from 'react-native-reanimated/lib/typescript/Animated';
import tweets from '@/assets/data/tweets';
// import twitterr from '../tweeter';
import Twitter from '../trial';
//import { View } from 'react-native-reanimated/lib/typescript/Animated';
export default function HomeScreen() {

  //const tweet= tweets[1]
  return (
    <><View>
    <Text style={{padding:10, color:"blue",fontSize:28,fontWeight:"bold"}}>Twiterr</Text>
    </View>
    
    
    <ThemedView style={styles.Container}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Twitter tweet={item} />}
          keyExtractor={(item) => item.id.toString()} />
      </ThemedView></>
    
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
