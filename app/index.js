import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/images/tic.png')} style={styles.img}/>
       <Text style={styles.text}>Tic-Tac-Toe</Text>

       <View style={styles.bottom}>
        <Text style={styles.textBottom1}>from</Text>
        <Text style={styles.textBottom2}>SA Tech</Text>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black"
    },
    img:{
        width:100,
        height:100,
        borderRadius:30,
        marginBottom:10
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    },
    bottom:{
        top:235
    },
    textBottom1: {
        fontSize: 20,
        color: "#FF1493",  // Dark Pink (Hex code)
        fontWeight: "medium"
    },
    textBottom2:{
        fontSize:25,
        fontWeight:"bold",
        color: "#FF8C00",
    }
})