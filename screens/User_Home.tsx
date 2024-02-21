import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type UserHomeProps=NativeStackScreenProps<RootStackParamList,'User_Home'>

const User_Home = ({navigation}:UserHomeProps) => {

  const onSubmit=()=>{
    Alert.alert('Issue Submitted Successfully')
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.HomeBackground}>
      <View style={styles.ReportCard}>
        <View style={styles.TitleContainer}>
          <Text style={styles.Title}>Issues</Text>
        </View>
        <View style={{marginTop:'5%'}}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name :</Text>
            <TextInput 
                style={styles.textBox}
                placeholder='Enter the Name'
              />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Place :</Text>
            <TextInput 
                style={styles.textBox}
                placeholder='Enter the Address'
              />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Issues :</Text>
            <TextInput 
                style={styles.textBox}
                placeholder='Enter the Issues'
              />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone:</Text>
            <TextInput 
                style={styles.textBox}
                keyboardType='numeric'
                placeholder='Enter the Phone Number'
              />
          </View>
          <View style={styles.bottonContainer}>
            <TouchableOpacity onPress={onSubmit}>
              <View style={styles.btn}>
                <Text style={styles.btn_title}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles=StyleSheet.create({
  HomeBackground:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  bottonContainer:{
    marginTop:40,
    marginBottom:40,
    flexDirection:'row',
    justifyContent:'space-evenly'
},
  ReportCard:{
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#CDA174',
    borderRadius:20,
  },
  btn_title:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
},
  TitleContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  Title:{
    fontWeight:'bold',
    fontSize:25,
    marginTop:20
  },
  textBox:{
    backgroundColor:'white',
    marginTop:10,
    borderRadius:10,
    width:'70%'
  },
  label:{
    marginTop:20,
    marginLeft:20,
    fontSize:20,
    fontWeight:'bold'
  },
  btn:{
    backgroundColor:'#402E32',
    height:50,
    width:90,
    borderRadius:10,
    flexDirection:'column',
    justifyContent:'center'
  },
  inputContainer:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
});

export default User_Home