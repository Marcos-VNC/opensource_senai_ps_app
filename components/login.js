import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,Alert, TextInput, SafeAreaView } from 'react-native';
import firebase from './connFireBase'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function login({navigation}){
    const [User, setUser] = React.useState("");
    const [Pass, setPass] = React.useState(null);
    const database = firebase.firestore()
    const createAcc = () => {
        firebase.auth().createUserWithEmailAndPassword(User, Pass)
        .then((userCredential) => {
            let user = userCredential.user;
        })
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorMessage);  
        });
    }


    const authenticate = () =>{
        if(User !== null && Pass !== null ){
            firebase.auth().signInWithEmailAndPassword(User, Pass)
            .then(async(userCredential) => {
            
                let user = await userCredential.user;

                //console.log(user.email)
                AsyncStorage.clear();
                await AsyncStorage.setItem("logedUser", user.email);
                
                setUser("");
                setPass("");
                navigation.push("Home")
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                Alert.alert(
                    "Login Falhou",
                    "Usuário ou senha inválido",
                    [
                    
                    { text: "OK"}
                    ]
                );
            });
        }else{
            Alert.alert(
                "Login Falhou",
                "Preencha Todos os campos",
                [
                
                { text: "OK" }
                ]
            );
        }
    }
    React.useEffect(() => {
        setUser("");
        setPass("");
    }, []);
    return(
        <SafeAreaView style={styles.container}>
                <Image style={styles.img2} source={require('../assets/imgs/login_background.jpg')} blurRadius={1}/>
                <View style={styles.field}>
                <Image style={styles.img} source={require('../assets/imgs/senai-logo.png')}/>
                    <View style={styles.formData} >
                        <TextInput placeholder="Usuário" type="text" name="userInput" style={styles.textUser} value={User} onChangeText={(User)=> setUser(User)} />
                        <TextInput placeholder="Senha" secureTextEntry={true}  name="passInput" style={styles.textPass} value={Pass} onChangeText={(Pass)=> setPass(Pass)}/>
                        <TouchableOpacity onPress={User !="" && Pass !="" ? () => authenticate() : () => Alert.alert("Login Falhou", "Preencha Todos os campos",[{text: "OK"}])} style={styles.loginEnterBtn}><Text style={styles.textLogin}>Entrar</Text></TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    field: {
        width: '80%',
        height: '50%',
        backgroundColor: "rgba(0,0,0,0.61)",
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "rgba(255,0,255,0)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
          width: 0,
          height: 0
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 100,
        marginLeft: 2,
        padding: 0,
        alignItems: 'center',
      },
    img:{
        zIndex: 20,
        width: "50%",
        margin:0,
        top: "1%",
        height: '22%',
        resizeMode:'contain',
        borderRadius: 5,
        minHeight: '10%',
        minWidth: '40%'
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
    formData:{
        marginBottom: '15%',
        width: "100%",
        height: "80%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    textUser:{
        color: 'white',
        backgroundColor: 'black',
        width: "80%",
        height: 60,
        borderRadius: 5,
        paddingStart: 15,
        fontSize: 20,
        marginBottom: 17
    },
    textPass:{
        backgroundColor: 'black',
        width: "80%",
        height: 60,
        borderRadius: 5,
        paddingStart: 15,
        fontSize: 20,
        color: 'white'

    },
    loginEnterBtn:{
        position:'absolute',
        width: '24%',
        height: 50,
        backgroundColor: '#FF0000',
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        top: '85%',
        left: '10%',
        borderRadius: 5,
    },
    textLogin:{
        color: 'white',
    }
})