import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type UserLoginProps= NativeStackScreenProps<RootStackParamList,"User_Login"> 
const User_login = ({navigation}:UserLoginProps) => {
    return (
      <View style={styles.SignUpBackground}>
          <Text style={styles.title}>Welcome User!</Text>
        <View style={styles.signUpCard}>
          <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
          <View style={styles.LoginTitleContainer}>
              <Text style={styles.LoginTitle}>Login</Text>
          </View>
            <View style={{marginTop:10,flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('User_Home')}>
                    <View style={styles.googlebtn}>
                        <Image style={styles.icon} source={require('../assets/google.png')} />
                        <Text style={styles.btn_title_google}>Sign in with Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
          justifyContent:'center'
      },
      signUpCard:{
          backgroundColor:'white',
          height:'30%',
          borderRadius:40
      }
  });

export default User_login