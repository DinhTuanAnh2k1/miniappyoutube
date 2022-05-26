import React from 'react';
import { StyleSheet, View , Image, Text, Button} from 'react-native';
import { useNavFunc } from '../../navigation/useNavFunc';

const Wellcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imgWellcome}
                source={require('../../assets/wellcome.jpg')}
            />
            <Text style={styles.text1}>APP UI KIT</Text>
            <Text style={styles.text2}>WELLCOME TO GEEZ APP</Text>
            <Text style={styles.text3}>Make your design workflow easier and save your time</Text>
            <View 
                style={styles.btnStarted}>
                <Button
                    title='GET STARTED'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e0b1e',
    },
    imgWellcome:{
        height: '60%',
    },
    text1:{
        color:'#a2b277', 
        paddingTop:50, 
        paddingLeft:41.5
    },
    text2:{
        paddingVertical:10,
        color:'white', 
        paddingLeft:41.5,
        paddingRight:130, 
        fontWeight:600, 
        fontSize: 20
    },
    text3:{
        color:'white', 
        paddingLeft:41.5, 
        paddingRight:45, 
        fontSize: 16
    },
    btnStarted:{
        paddingHorizontal: 50,
        paddingTop: 46,
    }
})

Wellcome.routeInfo = {
    title: 'Wellcome',
    path: '/wellcome',
};

export default Wellcome;
