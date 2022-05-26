import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavFunc } from '../../navigation/useNavFunc';
import {SearchBar, Results, VideoDetails, PlayListItem } from '../../components';
import YoutubeService from '../../services/YoutubeService';
import { useDispatch } from 'react-redux';
import { YoutubeAction } from '../../redux/actions';

let searchTimeout;

const SearchVideo = () => {
    
    const { navigation } = useNavFunc();
    const onPressSearch = () =>{
        navigation.navigate('Home')
    }
    const dispatch = useDispatch();
    const [results, setResults]=useState([]);
    const [keyword, setKeyword]=useState('')
    
    useEffect(()=>{
        if(keyword&&keyword.length>4){
            if(searchTimeout) clearTimeout(searchTimeout);
            searchTimeout=setTimeout(()=>{
                searchByKeyword();
            },500);
        }
    },[keyword])

    const searchByKeyword = async()=>{
        let res = await YoutubeService.searchByKeyword(keyword);
        setResults(res);
    } 

    const onSelectItem = (item) =>{
        dispatch({
            type: YoutubeAction.SELECT_ITEM,
            data: item
        })
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <SearchBar 
                onChangeText={setKeyword}
                onPress={onPressSearch}
            />
            {results.map((item,i)=>{
                return(
                    <Results 
                        key={`result${i}`}
                        thumb={item.snippet.thumbnails.default.url}
                        name={item.snippet.title}
                        author={item.snippet.channelTitle}
                        onPress={()=>onSelectItem(item)}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e0b1e',
    }
})

SearchVideo.routeInfo = {
    title: 'SearchVideo Screens',
    path: '/search-video',
};

export default SearchVideo;
