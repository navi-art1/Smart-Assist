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
            <View style={styles.containerinput}>
              <Text>Juan Pedro</Text>
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Apellido </Text>
            <View style={styles.containerinput}>
              <Text> Rodriguez Santos</Text>
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Email </Text>
            <View style={styles.containerinput}>
              <Text>cticuni@uni.pe</Text>
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.ContainerInfo}>
            <Text style={styles.text}> Numero de documento </Text>
            <View style={styles.containerinput}>
              <Text>7654321</Text>
            </View>
          </View>
        </View>
      </View>

      <View style = {{flex : 1, paddingHorizontal: 20 , paddingVertical: 30, justifyContent:'flex-end', alignItems:'flex-end'}}>
      <View style={styles.botonsubir}>
            <Image
              source={subir1}
              style={{ width: '70%', height: '70%'}}
              resizeMode={'cover'}
            />
          </View>
      </View>
