import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function HomeScreen({ navigation }){
  React.useEffect(() => {
    
  }, []);
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.img2} source={require('../assets/imgs/sesi-senai-fundo2.jpg')} blurRadius={1} />
      <TouchableOpacity
        style= {styles.btnInit}
        onPress={() => navigation.push('Quests')}
      >
      <Text style= {styles.btnInitText}>Iniciar Pesquisa</Text>
      </TouchableOpacity>

       <Image style={styles.iconImg} source={require('../assets/imgs/satisfacao.png')} />
        <TouchableOpacity style={styles.logoffBtn}  onPress={() => navigation.push('Login')}>
          <Text style={styles.textLogOff}>Logoff</Text>
          <Image style={styles.logoff} source={require('../assets/imgs/logoff.png')} blurRadius={1} />
        </TouchableOpacity>
      {/* <TouchableOpacity
        style= {styles.btnPlus}
        onPress={() => navigation.push('Details')}
      >
      <Text>➡</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  innerText: {
    color: 'red'
  },
  btnPlus: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'black',
    width: 40,
    height: 40,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: '90%',
    left: '85%'
  },
  btnInit:{
    backgroundColor: '#24B500',
    
    width: '50%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
  },
  logoffBtn:{
    width: 90,
    
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    backgroundColor: 'black',
    top: 10,
    right: 10,
    borderRadius: 20
  },
  textLogOff:{
    color: 'white',
    fontSize: 18
  },
  logoff:{
    top: -1.5,
    width: 30,
    height: 30,
    resizeMode: 'contain',

  },
  btnInitText:{
    color: "white",
    fontSize: 20,
  },
  iconImg:{
      top: "35%",
      height: '10%',
      width: '100%',
      resizeMode: 'contain'
  },
  img2:{
    width: "100%",
    position:'absolute',
    bottom:0,
    top:0,
    left: 0,
    right: 0,
    resizeMode:'cover',
    
},
});