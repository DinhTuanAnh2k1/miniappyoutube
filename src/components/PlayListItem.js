import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

const PlayListItem = (props) => {
    return (
        <Pressable style={styles.container}
            onPress = {props.onPress}
        >
            <Image 
                style={{width: 80, height: 56, borderRadius: 3}}
                source={{uri: props.thumb}}
            />
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.title}>{props.name}</Text>
                <Text style={[styles.title,{marginTop:6}]}>{props.author}</Text>
            </View>
            <Image 
                style={{width: 24, height: 24, tintColor: 'red'}}
                source={require('../assets/like.png')}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 20,
        cursor: 'pointer',
    },
    titleContainer:{
        flex:1,
        marginLeft: 16,
    },
    title:{
        color: 'white',
    }
})

export default PlayListItem;
