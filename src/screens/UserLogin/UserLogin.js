import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, Linking} from 'react-native';
import { useNavFunc } from '../../navigation/useNavFunc';

const UserLogin = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imgLogin}
                source={require('../../assets/login.jpg')}
            />
            <View style={styles.content}>
                <Text style={styles.textLogin}>SIGN IN</Text>
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
                <View style={styles.textInput}>
                    <Text style={{paddingVertical:36, marginLeft:'67%', color:'white'}}>
                        Forgot Password?
                    </Text>
                </View>
                <Button
                    title='SIGN IN'
                    color={'tomato'}
                />
                <View style={{paddingTop:'30%'}}>
                    <Text style={{textAlign:'center',color:'white'}}>Or connect with</Text>
                    <View style={styles.link}>
                        <Image 
                            style={{width:38, height:38, marginRight: 14}}
                            source={require('../../assets/facebook.png')}
                        />
                        <Image 
                            style={{width:38, height:38, marginRight: 14}}
                            source={require('../../assets/google-plus.png')}
                        />
                        <Image 
                            style={{width:38, height:38}}
                            source={require('../../assets/twitter.png')}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{marginRight: 5}}>Don't have an account?</Text>
                    <Text style={{color:'yellow'}}
                        onPress={()=>Linking.openURL('http://localhost:19006/signup')}
                    >
                        Sign Up
                    </Text>
                </View>
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

UserLogin.routeInfo = {
    title: 'UserLogin',
    path: '/login',
};

export default UserLogin;
