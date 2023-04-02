import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Switch, ScrollView, StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Logo from "../smart-assistance/src/fondo.jpeg";
import qr from "./src/qr.png";
import user from "./src/user.png";
import menu from "./src/menu.png";
import subir from "./src/subir.png"


const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default function App() {
  const Log = Logo;
  const qr1 = qr;
  const user1 = user;
  const menu1 = menu;
  const subir1 = subir;


  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      <StatusBar backgroundColor="black" />
      <View style={styles.subContainer1}>

        <View style={{ flex:1}}>
          <View style={styles.boton}>
            <Image
              source={menu1}
              style={{ width: '50%', height: '80%' }}
              resizeMode={'cover'}
            />
          </View>
        </View>

        <View style={{flex:1,alignItems:'center'}} >
          <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}  >Perfil</Text>
        </View>

        <View style={{flex:1}}>
          <Text> </Text>
        </View>





      </View>

      <View style={styles.subContainer2}>
        <View style={styles.boton2}>
          <Image
            source={user1}
            style={{ width: '100%', height: '100%' }}
            resizeMode={'cover'}
          />
        </View>



        <View style={styles.qr}>
        <Image
          source={qr1}
          style={{ width: '100%', height: '100%' }}
          resizeMode={'cover'}
        />

        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Nombres </Text>
            <View style={styles.containerInput}>
              <Text>Juan Pedro</Text>
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Apellido </Text>
            <View style={styles.containerInput}>
              <Text> Rodriguez Santos</Text>
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Email </Text>
            <View style={styles.containerInput}>
              <Text>cticuni@uni.pe</Text>
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Numero de documento </Text>
            <View style={styles.containerInput}>
              <Text>7654321</Text>
            </View>
          </View>
        </View>
      </View>

      <View style = {{flex : 1, paddingHorizontal: 20 , paddingVertical: 20, justifyContent:'flex-end', alignItems:'flex-end'}}>
      <View style={styles.botonSubir}>
            <Image
              source={subir1}
              style={{ width: '70%', height: '70%'}}
              resizeMode={'cover'}
            />
          </View>
      </View>


      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  subContainer1: {
    borderBottomWidth: 3,
    borderColor: '#0f294c',
    backgroundColor: '#93182a',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subContainer2: {
    width: '100%',
    backgroundColor: '#ececec',
    paddingTop: 40,
    alignItems: 'center',
    padding: 30
  },
  info: {
    alignItems: 'center',
    paddingVertical:10
  },
  containerInfo: {
    paddingVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderWidth:5
  },
  text: {
    color: '#0f294c',
    paddingLeft: 16,
    alignSelf: 'flex-start',
    fontSize: 16
  },
  containerInput: {
    height: 40,
    width: 300,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    paddingLeft: 20
  },
  input: {
    height: 40,
    width: 300,
    paddingLeft: 16
  },
  containerBoton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  boton: {
    width: 44,
    height: 44,
    backgroundColor: '#d9d9d9',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botonSubir: {
    width: 60,
    height: 60,
    backgroundColor: '#d9d9d9',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#0f294c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boton2: {
    width: 120,
    height: 120,
    backgroundColor: '#d9d9d9',
    borderRadius: 60,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  qr: {
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: '#ececec',
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botonCarrusel: {
    width: 60,
    height: 60,
    backgroundColor: '#93182A',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
});