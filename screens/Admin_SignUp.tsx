import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type AdminSignUpProps=NativeStackScreenProps<RootStackParamList,'Admin_SignUp'>
const Admin_SignUp = ({navigation}:AdminSignUpProps) => {
  return (
    <View style={styles.SignUpBackground}>
        <Text style={styles.title}>Hi Admin !</Text>
      <View style={styles.signUpCard}>
        <View style={styles.LoginTitleContainer}>
            <Text style={styles.LoginTitle}>Login</Text>
        </View>
        <View style={{marginBottom:20}}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.textBox}
                placeholder='Enter the Email'
            />
        </View>
        <View style={{marginBottom:30}}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.textBox}
                placeholder='Enter the Password'
                secureTextEntry={true}
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Admin_dashboard')}>
                <View style={styles.btn}>
                    <Text style={styles.btn_title}>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        <Text style={{textAlign:'center',fontSize:15,marginTop:10}}>
            or
        </Text>
        <View style={{marginTop:10,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity>
                <View style={styles.googlebtn}>
                    <Image style={styles.icon} source={require('../assets/google.png')} />
                    <Text style={styles.btn_title_google}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    btn_title_google:{
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5
    },
    icon:{
        height:15,
        width:15,
        marginRight:10,
        marginTop:15,
        marginLeft:10
    },
    googlebtn:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderColor:'black',
        borderWidth:1,
        height:50,
        width:120,
        borderRadius:10,
    },
    btn_title:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    label:{
        marginLeft:35,
        fontSize:20,
        marginBottom:10
    },
    btn:{
        backgroundColor:'#402E32',
        height:50,
        width:110,
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'center'
      },
    textBox:{
        borderColor:'black',
        borderWidth:1,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        color:'black',
        paddingLeft:20 
      },
    title:{
        fontSize:40,
        textAlign:'center',
        marginBottom:40
    },
    LoginTitleContainer:{
        marginBottom:30
    },
    LoginTitle:{
        fontSize:30,
        textAlign:'center',
        marginTop:20
    },
    SignUpBackground:{
        flex:1,
        backgroundColor:'#CDA174',
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    signUpCard:{
        backgroundColor:'white',
        height:'80%',
        borderTopEndRadius:40,
        borderTopLeftRadius:40
    }
});
export default Admin_SignUp