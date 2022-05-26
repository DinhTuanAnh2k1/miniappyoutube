import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, Linking} from 'react-native';
import { useNavFunc } from '../../navigation/useNavFunc';

const UserSignup = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imgLogin}
                source={require('../../assets/signup.jpg')}
            />
            <View style={styles.content}>
                <Text style={styles.textLogin}>SIGN UP</Text>
                <View style={styles.textInput}>
                    <Image 
                        style={styles.iconInput}
                        source={require('../../assets/user.png')}
                    />
                    <TextInput
                        style={styles.inputContent}
                        placeholder='Name'
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.textInput}>
                    <Image 
                        style={styles.iconInput}
                        source={require('../../assets/at.png')}
                    />
                    <TextInput
                        style={styles.inputContent}
                        placeholder='E-Mail'
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.textInput}>
                    <Image 
                        style={styles.iconInput}
                        source={require('../../assets/padlock.png')}
                    />
                    <TextInput
                        style={styles.inputContent}
                        placeholder='Password'
                        placeholderTextColor="#000"
                        secureTextEntry={true}
                    />
                    <Image 
                        style={styles.iconInput}
                        source={require('../../assets/hidden.png')}
                    />
                </View>
                <View style={{paddingTop:70}}>
                    <Button
                        title='SIGN UP'
                        color={'tomato'}
                    />
                </View>
                <Text style={{paddingVertical:18, marginLeft:'42%', color:'yellow'}}
                    onPress={()=>Linking.openURL('http://localhost:19006/login')}
                >
                    SIGN IN
                </Text>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    imgLogin:{
        flex:1,
        opacity: 0.4,
    },
    content:{
        width: '100%',
        position: 'absolute',
        marginTop:'30%',
        paddingHorizontal: 30,
    },
    textLogin:{
        fontWeight: 700,
        fontSize: 36,
        color: 'white',
        paddingBottom: 60,
    },
    textInput:{
        color: '#999',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingVertical: 10,
    },
    iconInput:{
        width:24, 
        height: 24,
        marginRight: 5
    },
    inputContent:{
        fontSize: 18,
        paddingVertical: 20,
        flex: 1,
    },
    link:{
        flexDirection: 'row',
        paddingVertical: 24,
        paddingLeft: '29%',
    },
    footer:{
        flexDirection: 'row',
        paddingVertical: 24,
        paddingLeft: '21%',
    }
})

UserSignup.routeInfo = {
    title: 'UserSignup',
    path: '/signup',
};

export default UserSignup;
