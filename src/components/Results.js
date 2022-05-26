import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Pressable } from 'react-native-web';

const Results = (props) => {
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
            <Image 
                style={{width: 80, height: 56}}
                source={{uri:props.thumb}}
            />
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.title}>{props.name}</Text>
            </View>
            <Image 
                style={{width: 24, height: 24, color: 'while'}}
                source={require('../assets/more.png')}
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
        fontSize: 16
    }
})

export default Results;
