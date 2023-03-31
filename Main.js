import React from 'react';
import { StatusBar,useState } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image,TextInput, Switch, ScrollView, DatePickerIOS} from 'react-native';


import Logo from "../smart-assistance/src/fondo.jpeg";
import { DatePickerIOSBase } from 'react-native';



export default function App() {


  const Log = Logo;



  return (
    <View style={styles.container}>

      <View style={styles.subContainer1}>
        <ImageBackground source={Log} resizeMode={'cover'} style={styles.image} >

        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>

            <View style= {styles.boton}>
              <Text>
                M
              </Text>
              
            </View>

            <View style = {{backgroundColor:'white', paddingHorizontal:6 ,paddingVertical:6 ,borderWidth:2 ,borderRadius:12, height:44}}>
              <Text style={{color : '#0E294B', fontSize:20, fontWeight: 'bold' }} >
                Smart City
              </Text>
            </View>

            <View style= {styles.boton}>
              <Text>
                U
              </Text>
              
            </View>
            
        </View>


        </ImageBackground>

      </View>

        <View style={styles.subContainer2}>
          <View  style={{color : '#0E294B', fontSize:20, fontWeight: 'bold', alignItems:'center',gap:10 , paddingVertical:10 }}>
            <Text> Domingo 26 - Marzo</Text>
            <Text> 16:40:25</Text>
          </View>


        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:10, width:240,} }>
          <Text>Hora de Entrada</Text>
          <View style={styles.containerinput}>

              <TextInput style={styles.input}
                placeholder="08:00" 
              />
          </View>
        </View>


        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:10, width:240,} }>
          <Text>Hora de Salida</Text>
          <View style={styles.containerinput}>
              <TextInput style={styles.input}
                placeholder="16:00" 
              />
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:10, width:240,} }>
          <Text>Hora totales</Text>
          <View style={styles.containerinput}>
              <TextInput style={styles.input}
                placeholder="44" 
              />
          </View>
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%',padding:30, marginTop:160 }}>
          <View>
            <View style= {styles.botonCarrusel}>
              <Text style = {{color : 'white', fontSize:20, fontWeight: 'bold' }} >L</Text>
            </View>

          </View>

          <View style={{flexDirection:'row', justifyContent:'space-evenly', gap:20}} > 
            <View style= {styles.botonCarrusel}>
              <Text style = {{color : 'white', fontSize:20, fontWeight: 'bold' }} >H</Text>
            </View>
            <View style= {styles.botonCarrusel}>
              <Text style = {{color : 'white', fontSize:20, fontWeight: 'bold' }} >N</Text>
            </View>
            <View style= {styles.botonCarrusel}>
              <Text style = {{color : 'white', fontSize:20, fontWeight: 'bold' }} >M</Text>
            </View>


          </View>

        </View>













        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },

  image:{
    flex:1,
    borderRadius:60,
  
    

    padding:30
  },

  subContainer1: {
    flex:0.3,
    overflow: 'hidden',
    borderBottomWidth:3,
    borderColor:'#0f294c'

  },
//////////////////////////////////////////////////////////////////////////////////
  subContainer2: {
    flex:0.70,
    
    width: '100%',

    backgroundColor: '#ececec',
    paddingTop:40,
    alignItems:'center'
    
    

  },

  info:{

    alignItems:'center',

  },

  ContainerInfo:{
    paddingVertical: 10,
    width: '80%',
    alignItems:'center'

  },



  text:{
    color: '#0f294c',
    paddingLeft:16,
    alignSelf:'flex-start',
    fontSize:16

  },


  containerinput:{
    height:40,
    width:80,
    backgroundColor:'white',
    borderRadius:16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    justifyContent:'center',
    alignItems:'center'
    

  },

  ContainerBoton:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical: 40,

  },

  boton:{
    width:44,
    height:44,
    backgroundColor:'#ececec',
    borderRadius:50,
    borderWidth:5,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },

  botonCarrusel:{
    width:60,
    height:60,
    backgroundColor:'#93182A',
    borderRadius:50,
    borderWidth:5,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },




  boton2:{
    height:40,
    width:250,
    backgroundColor:'white',
    borderRadius:16,
    backgroundColor: '#0f294c',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
  },

  text2:{
    color: 'white',
    fontWeight:'bold',
    fontSize:18
  },

  containerTogle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },

  

///////////////////////////////////////////////////////////////////////////////


});
