import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Admin_dashboard = () => {
  return (
    <View style={styles.adminbackground}>
        <Text style={styles.Title}>DashBoard</Text>
        <View style={styles.DashboardContainer}>
            <ScrollView>
            <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.DashBoardCard}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={styles.nameIcon}>
                    <Text style={styles.nameLetter}>G</Text>
                </View>
                <View style={styles.IssueAndName}>
                    <Text style={styles.content}>E-Waste</Text>
                    <Text style={styles.content}>Rockfort</Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={{color:'white',textAlign:'center'}}>View Issue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    btn:{
        backgroundColor:'#CDA174',
        height:50,
        width:80,
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'center'
      },
    content:{
        color:'black'
    },
    IssueAndName:{
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    nameIcon:{
        height:40,
        width:40,
        borderRadius:100,
        backgroundColor:'#CDA174',
        marginLeft:20,
        marginTop:5
    },
    nameLetter:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        marginTop:5
    },
    DashBoardCard:{
        flexDirection:'column',
        justifyContent:'center',
        height:70,
        marginTop:20,
        marginRight:20,
        marginLeft:20,
        borderWidth:1,
        borderRadius:15
    },
    Title:{
        fontSize:30,
        textAlign:'center',
        marginBottom:20
    },
    adminbackground:{
        backgroundColor:'#CDA174',
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    DashboardContainer:{
        backgroundColor:'white',
        height:'75%',
        borderTopEndRadius:30,
        borderTopLeftRadius:30
    }
})
export default Admin_dashboard