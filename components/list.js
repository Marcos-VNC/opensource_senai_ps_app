import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
function listScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        style= {styles.btnPlus}
        onPress={() => navigation.push('Home')}
      >
      <Text>⬅</Text>
      </TouchableOpacity>
    </View>
  );
}

export default listScreen

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
  
});