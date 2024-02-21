import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type LoginProps = NativeStackScreenProps<RootStackParamList,'Login'>

const Login = ({navigation}:LoginProps) => {
  return (
    <>
        <View style={{flex:1,backgroundColor:'white'}}>
            <ImageBackground source={require('../assets/Login_pic_1.jpg')} 
                style={styles.image}
            >
                <View style={styles.LoginContainer}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Waste Management</Text>
                        <Text style={styles.subtitle}>Trichy City Corporation</Text>
                        <View style={styles.bottonContainer}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Admin_SignUp')}>
                                <View style={styles.btn}>
                                    <Text style={styles.btn_title}>Admin  Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('User_Login')}>
                                <View style={styles.btn}>
                                    <Text style={styles.btn_title}>Report Issues</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    </>
  )
}

const styles=StyleSheet.create({
    image:{
        height:'70%',
        width:'100%',
        resizeMode:'cover'
    },
    card:{
        backgroundColor:'#CDA174',
        padding:20,
        marginLeft:20,
        marginRight:20,
        top:120,
        borderRadius:15
    },
    subtitle:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10
    },
    title:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    LoginContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
    },
    btn:{
        backgroundColor:'#402E32',
        height:50,
        width:90,
        borderRadius:10
    },
    bottonContainer:{
        marginTop:40,
        marginBottom:40,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    btn_title:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        padding:5
    }
})
export default Login