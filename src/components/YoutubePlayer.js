import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import YouTube from 'react-youtube';

const opts = {
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const YoutubePlayer = (props) => {
    
    return ( 
        <View style = { styles.container }>
            <YouTube onEnd={props.onEnd} videoId={props.videoId} opts = {opts} onReady={(event)=> {
                event.target.playVideo();
            }} />
            <View style = { styles.titleContainer }>
                <View style = { styles.title }>
                    <Text style = {{ color: "white", fontSize: 18 } }>{props.name}</Text> 
                    <Text style = {styles.author}>{props.author}</Text>
                </View>
                <Image 
                        style={{width: 24, height: 24, tintColor: 'green'}}
                        source={require('../assets/heart.png')}
                    /> 
                <View style = { styles.like }>
                    
                    <Text style = {{ color: "white", fontSize: 14 } } >{props.totalView}</Text>
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    titleContainer: {
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 20,
        alignItems: "center",
    },
    title: {
        flex: 1,
    },
    like: {
        marginLeft: 5,
    },
    author: {
        color: "white",
    }
})

export default YoutubePlayer;