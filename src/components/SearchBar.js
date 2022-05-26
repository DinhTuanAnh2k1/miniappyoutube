import React from 'react';
import { StyleSheet, View, TextInput, Image, Text} from 'react-native';
import { normalizeRect } from 'react-native/Libraries/StyleSheet/Rect';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image 
                    style={styles.searchIcon}
                    source={require('../assets/loupe.png')}
                />
                <TextInput
                    style={styles.searchInput}
                    onChangeText={props.onChangeText}
                /> 
                <Image 
                    style={styles.deleteIcon}
                    source={require('../assets/remove.png')}
                    onChangeText={()=>{
                        alert('hi')
                    }}
                />
            </View>
            <Text style={styles.cancel}
                onPress={props.onPress}
            >Cancel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer:{
        flex: 1,
        height: 48,
        backgroundColor: '#363942',
        flexDirection: 'row',
        borderRadius: 8,
        marginRight: 16,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    deleteIcon: {
        cursor: 'pointer',
        width: 16,
        height: 16,
        tintColor: 'white',
    },
    searchInput:{
        flex:1, 
        height:'100%', 
        color: '#a2b277', 
        fontSize: 18,
        paddingHorizontal: 10
    },
    cancel:{
        color: '#a2b277',
        fontSize: 18,
        cursor: 'pointer',
    }
})

export default SearchBar;
