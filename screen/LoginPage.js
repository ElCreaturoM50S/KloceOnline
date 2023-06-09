import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Switch
} from 'react-native';
import { event } from 'react-native-reanimated';

export default function LoginScreen(props){
//    console.log(props)
//    console.log(props.route.params.Ratio)
    const readSwitchState = props.route.params.switchState
    const funcSwitchState = props.route.params.setSwitchState
    const setProfileData = props.route.params.setProfileData

    const toggleSwitch = () => funcSwitchState(previousState => 1);

    const [loginData, setLoginData] = useState({
        nazwa: '',
        haslo: '',
    })


    function onLoginDataChange(event){
        let newValue = event.target.value
        const newList = loginData;
        newList[event.target.id] = newValue
        setLoginData(newList)
    }

    async function CheckIfDataIsRight(){
        if (loginData['nazwa'] == false || loginData['haslo'] == false ){
            return true
        }
        const url = 'https://loginapp-d9ec2-default-rtdb.europe-west1.firebasedatabase.app/testData.json'
        const res = await fetch(url)
        const newData =  await res.json()
        const loadedData = [];

        for(const key in newData){
          loadedData.push({id: key,myData: newData[key]})
        }
        let gigaString = []

        Object.entries(loadedData).forEach(([key,value]) => {
            let newString = value["myData"]
            let DictString = null
            let newKey = ''

            for(const xkey in newString){
                newKey = xkey
                DictString = newString[xkey]
            }
            gigaString[newKey] = DictString
        })

        if (gigaString[loginData['nazwa']]['haslo'] == loginData['haslo']){
            console.log("login")
            setProfileData(gigaString[loginData['nazwa']])
            funcSwitchState(2)
        }
    }

    return (
        <View style={styles.view}>
            <form style={styles.form}>

                <Text style={styles.title}>
                    LOGIN
                </Text>

                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={styles.switchText}>LOGIN</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={readSwitchState ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={readSwitchState}
                    /> 
                    <Text style={styles.switchText} >SIGNUP</Text>
                </View>


                <input 
                onChange={onLoginDataChange}
                id='nazwa' type="text" placeholder='Nazwa' style={{...styles.input, ...styles.topText}} />
                
                <input 
                onChange={onLoginDataChange}
                id='haslo' type="password" placeholder='Hasło' style={styles.input}/>

                <Pressable style={styles.button} onPress={CheckIfDataIsRight}>
                    <Text style={{color: '#fff'}}>LOGIN</Text>
                </Pressable>
            
            </form>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#80ccff",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    form: {
        backgroundColor: "#007acc",
        borderRadius: '12px',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        color: '#fff',
        margin: '25px',

        fontSize: 40,
    },
    switchText:{
        color: '#fff',
        margin: '5px',

        fontSize: 15,
    },
    input: {
        backgroundColor: "#4db8ff",
        borderRadius: '12px',
        color: '#000',
        width: '80%',
        height: '30px',
        border: '0',
        textAlign: 'center',
        margin: '5px',
    },

    button: {
        backgroundColor: "#1aa3ff",
        borderRadius: '12px',
        color: '#fff',
        width: '80%',
        height: '40px',
        margin: '5px',

        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: '15px',
        marginBottom: '30px'
    },
    topText: {
        marginTop: '25px'
    }
  });