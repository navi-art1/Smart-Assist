import React from 'react';
import { StatusBar,useState } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image,TextInput, Switch, ScrollView} from 'react-native';


import Logo from "../smart-assistance/src/Logo23.png";



export default function App() {


  const Log = Logo;



  return (
    <View style={styles.container}>

      <View style={styles.subContainer1}>
        <ImageBackground source={Log} resizeMode={'cover'} style={styles.image} >


        <View style = {{backgroundColor:'white', paddingHorizontal:6 ,paddingVertical:6 ,borderWidth:2 ,borderRadius:12}}>
          <Text style={{color : '#0E294B', fontSize:20, fontWeight: 'bold' }} >
            Smart City
          </Text>
        </View>
        </ImageBackground>

      </View>

        <View style={styles.subContainer2}>
          <ScrollView>

            <View style={styles.info}>
              <View style= {styles.ContainerInfo}>
                <Text style={styles.text}> Nombres </Text>
                <View style={styles.containerinput}>
                  <TextInput style={styles.input}
                    placeholder="Ingrese su Nombre"
                  />
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View style= {styles.ContainerInfo}>
                <Text style={styles.text}> Apellido </Text>
                <View style={styles.containerinput}>
                  <TextInput style={styles.input}
                    placeholder="Ingrese su apellido"
                  />
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View style= {styles.ContainerInfo}>
                <Text style={styles.text}> Email </Text>
                <View style={styles.containerinput}>
                  <TextInput style={styles.input}
                    placeholder="Ingrese su email"
                  />
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View style= {styles.ContainerInfo}>
                <Text style={styles.text}> Numero de documento </Text>
                <View style={styles.containerinput}>
                  <TextInput style={styles.input}
                    placeholder="7654321"
                  />
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View style= {styles.ContainerInfo}>
                <Text style={styles.text}> Contraseña </Text>
                <View style={styles.containerinput}>
                  <TextInput style={styles.input}
                    placeholder="********" secureTextEntry
                  />
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View style= {styles.ContainerInfo}>
                <Text style={styles.text}> Repetir Contraseña </Text>
                <View style={styles.containerinput}>
                  <TextInput style={styles.input}
                    placeholder="********" secureTextEntry
                  />
                </View>
              </View>
            </View>

            <View style = {styles.boton2}>
              <Text style={styles.text2} >
                REGISTRARSE
              </Text>
            </View>
          
          </ScrollView>

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
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:30
  },

  subContainer1: {
    flex:0.25,
    borderBottomLeftRadius:40,
    overflow: 'hidden',

  },
//////////////////////////////////////////////////////////////////////////////////
  subContainer2: {
    flex:0.75,
    
    width: '100%',

    backgroundColor: '#ececec',
    paddingTop:40
    
    

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
    width:300,
    backgroundColor:'white',
    borderRadius:16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 

  },

  input:{
    height:40,
    width:300,
    paddingLeft:16
  },

  ContainerBoton:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical: 40,

  },

  boton:{
    width:60,
    height:60,
    backgroundColor:'#006501',
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
