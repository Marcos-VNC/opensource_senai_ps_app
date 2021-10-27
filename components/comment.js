import * as React from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity,Image, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setDataDB from './sendData'
export default function comm({ navigation }) {

    const [value, setVal] = React.useState('false');
    const [comment, setcomment] = React.useState('');

    const callSave = async () => {
        await AsyncStorage.setItem("anonymous", value);
        await AsyncStorage.setItem("comment", comment);
        setDataDB();
        Alert.alert(
            "Obrigado!!!",
            "Pesquisa enviada com sucesso.",
            [
            
            { text: "OK"}
            ]
        );
        navigation.push('Home')
    }
    
  return (
    <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Comentário
            </Text>
            <Image style={styles.img} source={require('../assets/imgs/senai-logo.png')}/>
        </View>
        <View style={styles.body}>
            <Text style={styles.label} >
               Comentários:
            </Text>
            <TextInput  
                multiline
                numberOfLines={10}
                onChangeText={comment => setcomment(comment)}
                value={comment}
                style={styles.lgInp}
            />
            <View style={styles.rbtCombo}>
                <RadioButton
                value="false"
                status={ value === 'true' ? 'checked' : 'unchecked'}
                onPress={value === 'true' ? () => setVal('false') :() => setVal('true')}
                color="black"
                />
                <Text>Enviar Anonimamente?</Text>
            </View>
        </View>
        <TouchableOpacity
            style= {styles.btnBack}
            onPress={() => navigation.push('Quests', {'Number': 13 })}
            > 
            <Text>➡</Text>
            
        </TouchableOpacity>
        <TouchableOpacity
            style= {styles.btnGo}
            onPress={() => (callSave())}
            >
            <Text>Enviar</Text>
            </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
container:{
        width: "100%",
        height: "100%"
    },
    header:{
        width: "100%", 
        height: "10%", 
        backgroundColor:"#FF0000",
        
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    },
    headerText:{
        fontSize: 20,
        color:"#F2F7F2",
        marginLeft: 20
    },
    img:{
        width: "25%",
        height:"80%",
        resizeMode:'contain',
        marginRight:20
    },
    body:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "#F2F7F2" 
    },
    label:{
        marginTop: "5%"
    },
    lgInp:{
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        height: "60%"
    },
    btnBack:{
      transform: [{ rotateY: '180deg'}],
      color: 'white',
      fontSize: 20,
      backgroundColor: '#d8dbd7',
      width: 40,
      height: 40,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      top: '90%',
      left: '5%'
    },
    btnGo: {
      color: 'white',
      fontSize: 20,
      backgroundColor: 'green',
      width: 80,
      height: 40,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      top: '90%',
      left: '70%'
    },
    rbtCombo:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
})