import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { useNavFunc } from '../../navigation/useNavFunc';
import {PlayListItem, YoutubePlayer} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import YoutubeService from '../../services/YoutubeService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { YoutubeAction } from '../../redux/actions';

const Home = () => {
    const {navigation}=useNavFunc();
    const onPressSearch = ()=>{
        navigation.navigate('SearchVideo')
    }
    const {listMusic, playing } = useSelector(state=>state.youtube);
    const dispatch = useDispatch();
    useEffect(()=>{
        getCacheData();
    }, [])

    const getCacheData = async()=> {
        let cache = await AsyncStorage.getItem('LIST_MUSIC');
        if(cache){
            dispatch({
                type: YoutubeAction.UPDATE_LIST,
                data: JSON.parse(cache),
            })
            YoutubeService.initPlayer();
        }
    }

    const onEnd = () => {
        dispatch({
            type: YoutubeAction.NEXT_SONG,
        })
    }

    const selectVideoNext = () => {
        
    }

    return ( 
        <View style = { styles.container } >
            {Boolean(playing) &&
                <YoutubePlayer
                    onEnd={onEnd}
                    videoId={playing.id.videoId}
                    name={playing.snippet.title}
                    author={playing.snippet.channelTitle}
                    totalView={3000000}
                />
            }
            <Text style={styles.playListTitle}>Playlist</Text>
            {listMusic.map((item,i)=>{
                return(
                    <PlayListItem 
                        onPress={selectVideoNext}
                        key={`item${i}`}
                        thumb={item.snippet.thumbnails.default.url}
                        name={item.snippet.title}
                        author={item.snippet.channelTitle}
                    />
                )
            })}
            <View style={styles.btnAdd}>
                <Button
                    title="ADD"
                    onPress={onPressSearch}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    playListTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft: 24,
        marginTop: 30,
        color: 'white',
    },
    btnAdd: {
        paddingHorizontal: 50,
        paddingVertical: 20,
    }
})

Home.routeInfo = {
    title: 'Home Screens',
    path: '/home',
};

export default Home;