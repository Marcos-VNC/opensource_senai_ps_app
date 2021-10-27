import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image, Alert, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const allQuestions= [
    {'Question':'Limpesa e conservação da sala e da oficina.'},
    {'Question':'Disponibilidade de equipamentos, máquinas e ferramentas para realização do curso.'},
    {'Question':'Qualiade das apostilas, livros e textos, quanto a impressão e adequação da informação.'},
    {'Question':'Cumprimento do horário das aulas.'},
    {'Question':'Cumprimento do objetivo proposto pelo curso.'},
    {'Question':'Preocupação do docente com o aproveitamento dos alunos.'},
    {'Question':'Domínio do docente sobre os assuntos tratados.'},
    {'Question':'O aprendizado, na teoria e na pratica, em relação ao esperado.'},
    {'Question':'Conteudo do  curso, em relação as espectativas.'},
    {'Question':'Atendimento da recepção / secretaria da escola.'},
    {'Question':'Atendimento telefônico da escola'},
    {'Question':'Atendimento da cantina / Lanchonete.'},
    {'Question':'Atendimento da biblioteca.'},
]

function Quest({ navigation, route }){

    const [checked , setChecked ] = React.useState(' ');
    const [checkedVal, setCheckedVal] = React.useState(' ');
    const [comment, setcomment] = React.useState('');

    React.useEffect(() => {
        getData();
    }, [])
    const updateChoices = () => {
  
        AsyncStorage.setItem('check' + route.params.Number, checked )
        AsyncStorage.setItem('valCheck' + route.params.Number, checkedVal )
        AsyncStorage.setItem('comment' + route.params.Number, comment )
    }
    const getData = () =>{
        try {
            AsyncStorage.getItem('check' + route.params.Number)
            .then(value => {
                if(value != null){
                    setChecked(value);    
                }

            })
            AsyncStorage.getItem('valCheck' + route.params.Number)
            .then(value => {
                if(value != null){
                    setCheckedVal(value);    
                }
                
            })
        } catch (error) {
            console.log(error);
        }
    }
        return(
            <View style={styles.container} >
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Pergunta {route.params.Number}:
                    </Text>
                    <Image style={styles.img} source={require('../assets/imgs/senai-logo.png')}/>
                </View>
            <View style={styles.body}>
        

            <View style={{height: '80%', width: '80%'}}>
            <Text>{route.params.Number}. {allQuestions[route.params.Number - 1].Question}</Text>
            <Text>(Nivel de Importancia:)</Text>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="alt"
                status={ checked === 'alt' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('alt')}
                color="black"
                />
                <Text>Alta</Text>
            </View>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="med"
                status={ checked === 'med' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('med')}
                color="black"
                />
                <Text>Media</Text>
            </View>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="bai"
                status={ checked === 'bai' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('bai')}
                color="black"
                />
                <Text>Baixa</Text>
            </View>
            <Text>(Nivel de Satisfação:)</Text>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="oti"
                status={ checkedVal === 'oti' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedVal('oti')}
                color="black"
                />
                <Text>Ótima</Text>
            </View>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="bom"
                status={ checkedVal === 'bom' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedVal('bom')}
                color="black"
                />
                <Text>Bom</Text>
            </View>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="reg"
                status={ checkedVal === 'reg' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedVal('reg')}
                color="black"
                />
                <Text>Regular</Text>
            </View>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="rui"
                status={ checkedVal === 'rui' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedVal('rui')}
                color="black"
                />
                <Text>Ruim</Text>
            </View>
            <View style={styles.rbtCombo}>
                <RadioButton
                value="nda"
                status={ checkedVal === 'nda' ? 'checked' : 'unchecked' }
                onPress={() => setCheckedVal('nda')}
                color="black"
                />
                <Text>Não se Aplica</Text>
            </View>


            {checkedVal === 'rui' || checkedVal === 'reg' ? 
                <View style={{height: "20%", marginBottom: "20%"}}>
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
                </View>
                :
                <View>
                </View>
            }
            </View>

    
            <TouchableOpacity
            style= {styles.btnBack}
            onPress={route.params.Number == 1 ? () => navigation.push('Quests', {'Number': route.params.Number }) : () => (navigation.push('Quests', {'Number': route.params.Number - 1 }), updateChoices())}
            > 
            <Text>≫</Text>
            
            </TouchableOpacity>
                
            <TouchableOpacity
            style= {styles.btnGo}
            onPress={allQuestions.length == route.params.Number ? 
                    () => checked != " " && checkedVal != " " ? (navigation.push('Comment'), updateChoices()) 
                    :Alert.alert("Campos Vazios","Preencha todos os campos par prosseguir",[{ text: "OK"}])
                     : () => checked != " " && checkedVal != " " ? 
                            (navigation.push('Quests', {'Number': route.params.Number + 1 }), updateChoices())
                            : Alert.alert("Campos Vazios","Preencha todos os campos par prosseguir",[{ text: "OK"}])}
            >
            <Text>≫</Text>
            </TouchableOpacity>
    
            </View>
            </View>    
        )
      
    }


export default Quest


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
    label:{
        marginTop: "5%"
    },
    lgInp:{
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        height: "100%",
        marginBottom:"5%"
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
    btnGo: {
      color: 'black',
      fontSize: '30px',
      backgroundColor: '#FF0000',
      width: 40,
      height: 40,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      top: '90%',
      fontWeight: "bold",
      left: '85%'
    },
    btnBack:{
      transform: [{ rotateY: '180deg'}],
      color: 'black',
      fontSize: 30,
      backgroundColor: '#FF0000',
      width: 40,
      height: 40,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      top: '90%',
      fontWeight: "bold",
      left: '5%'
    },
    rbtCombo:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  });