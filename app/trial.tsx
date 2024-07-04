import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tweets from '@/assets/data/tweets';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Twitter(props) {
    const tweet = props.tweet;
    return (
        <View style={styles.Container}>
            <Image source={{ uri: tweet.user.image }} style={styles.Imagecontainer} />
            <View style={styles.datacontainer}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>{tweet.user.name}</Text>
                    <Text style={{ color: "grey" }}>  {tweet.user.username}   .2h</Text>
                    <Entypo 
                        name="dots-three-horizontal"
                        size={18} 
                        color="grey" 
                        style={{ marginLeft: "auto" }} 
                    />
                </View>
                <Text>{tweet.content}</Text>
                {tweet.image && <Image source={{ uri: tweet.image }} style={styles.contentImage} />}
                <View style={styles.containerFooter}>
                    <View style={styles.iconWithText}>
                        <AntDesign name="retweet" size={24} color="black" />
                        <Text style={styles.iconText}>{tweet.impressions}</Text>
                    </View>
                    <FontAwesome name="comment-o" size={24} color="black" />
                    <Ionicons name="stats-chart-outline" size={24} color="black" />
                    <Entypo name="heart-outlined" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        padding: 20,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    datacontainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 10
    },
    Imagecontainer: {
        width: 80, 
        height: 80, 
        borderRadius: 45
    },
    contentImage: {
        width: "100%",
        aspectRatio: 16 / 9,
        margin: 10,
        borderRadius: 15,
    },
    containerFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconWithText: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconText: {
        marginLeft: 5
    }
});
