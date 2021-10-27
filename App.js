import * as React from 'react';
import { StyleSheet,View, Text, Button, Image} from 'react-native';
import { NavigationContainer, DefaultTheme,DarkTheme   } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/home'
import listScreen from './components/list'
import login from './components/login'
import Quest from './components/questTemp'
import comm from './components/comment'


const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 0, 0)',
    background: '#f2f7f2',
    card: '#FF0000',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)', 
  },
};

class app extends React.Component {
  render(){
      
    return (

      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator style={styles.header} initialRouteName="Login">
          <Stack.Screen style={styles.header} name="Login" component={login} options={{headerShown: false, }} />
          <Stack.Screen style={styles.header} name="Home" component={HomeScreen} options={{headerTitle: () => (<Text style={styles.headerMain}>INICIAR PESQUISA</Text>), headerRight: () => (<Image style={styles.iconImg} source={require('./assets/imgs/senai-logo.png')} />), headerTitleAlign: "start"} }/>
          <Stack.Screen name="Details" component={listScreen}  />
          <Stack.Screen name="Quests" component={Quest} //options={{ title: 'Pesquisa de Satisfação' }}
            initialParams={{'Number': 1}}  options={{headerShown: false, }} />
          <Stack.Screen name="Comment" component={comm} options={{headerShown: false, }}  />
        </Stack.Navigator>
      </NavigationContainer>
    
    );
  }
}


export default app;


const styles = StyleSheet.create({
  header:{
    backgroundColor: 'black'
  },
  iconImg:{
    width: 100,
    height: 30,
    marginRight: 20
  },
  headerMain:{
    fontSize: 20,
    color: 'white'
  }
});