import firebase from './connFireBase'
import AsyncStorage from '@react-native-async-storage/async-storage';
let en = "false";
let data = {};
export default async function setDataDB(){
    
    await AsyncStorage.getItem("anonymous").then(value => {
        en = value
    })
    for(let i = 0; i <= 13; ++i){
        await AsyncStorage.getItem("check" + i).then(value => {
        if(value != null){
            let n = "check"+ i;
            data["opt" + i] = value
        }})
        await AsyncStorage.getItem("valCheck"+ i).then(value => {
        if(value != null){
            let n = "valCheck"+ i;
            data["aws"+ i] = value
        }})
        await AsyncStorage.getItem("comment"+ i).then(value => {
        if(value != null){
            let n = "comment"+ i;
            data["comment"+ i] = value
        }})
    }
    
    await AsyncStorage.getItem("comment").then(value => {
        if(value != null){
            data["finaComment"] = value
        }
        //else{
         //   data["finaComment"] = " "
        //}
    })
    
    await AsyncStorage.getItem("logedUser").then(value => {
        if (en === "false"){
            
            data['appraiser'] = value;
        }else{
             data['appraiser'] = "anonymous";
        }
    })
    firebase.database().ref('avaliacoes/').push(data)
};