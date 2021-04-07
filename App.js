import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const beer =require("./Graphics/beer.png")
const stars =require("./Graphics/star.png")

export default function App() {
  return (
    <View style={styles.container}>
	
	<View style={{flex:1, width:"100%", height:"100%", alignContent:"center", justifyContent:"center",alignItems: 'center'}}>
      <Text>Open up App.js to start working on your app!</Text>
	  </View>
      <StatusBar style="auto" />
	  
	  <View style={{flex:1, width:"100%", height:"100%", alignContent:"center", justifyContent:"center",}}>
	  
	  <View style={{backgroundColor:"grey"}}>
	   <Image src={beer} style={{height:100, width:60}}/>
	   </View>
		 <View style={{backgroundColor:"yellow"}}>
		<Image src={stars} style={{height:100, width:200}}/>
		</View>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
