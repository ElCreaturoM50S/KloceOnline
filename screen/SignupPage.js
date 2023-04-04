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

    const toggleSwitch = () => funcSwitchState(previousState => 0);

    const [loginData, setLoginData] = useState({
        nazwa: '',
        secretword: '',
        haslo: '',
        email: '',
    })

    /*
    const [loginData, setLoginData] = useState({
        nazwa: {typeField: 'nazwa', value: ''},
        secretword: {typeField: 'secretword', value: ''},
        haslo: {typeField: 'haslo', value: ''},
        email: {typeField: 'email', value: ''},
    })
    */

    function onLoginDataChange(event){
        let newValue = event.target.value

        const newList = loginData;
        newList[event.target.id] = newValue
        setLoginData(newList)
    }

    async function CheckIfDataIsRight(){
        let DataIsRight = true
        const url = 'https://loginapp-d9ec2-default-rtdb.europe-west1.firebasedatabase.app/testData.json'
        const res = await fetch(url)
        const newData =  await res.json()
        const loadedData = [];

        //console.log(newData)
        for(const key in newData){
          loadedData.push({id: key,myData: newData[key]})
        }

        let gigaString = []
        
        Object.entries(loadedData).forEach(([key,value]) => {
            let newString = value["myData"]
            let DictString = null
            let newKey = ''
            for(const xkey in newString){
                //check if name is in firebase
                if (loginData['nazwa'] == xkey){
                    console.log("we got this already")
                    DataIsRight = false
                    return false
                }
                newKey = xkey
                DictString = newString[xkey]
            }
            gigaString[newKey] = DictString
        })

        return DataIsRight
    }

    async function SignUp(event){
        const check = await CheckIfDataIsRight()
        console.log(check)
        if (check == false){
            console.log(check)
            return false
        }
        console.log("XD")
        const url = 'https://loginapp-d9ec2-default-rtdb.europe-west1.firebasedatabase.app/testData.json'
        const keyname = loginData["nazwa"]
        const my_object = {
            [keyname] : loginData
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(my_object),
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await fetch(url,options)
        setProfileData(loginData)
        funcSwitchState(2)
    }

    return (
        <View style={styles.view}>
            <form style={styles.form}>

                <Text style={styles.title}>
                    SIGNUP
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
                
                <input 
                onChange={onLoginDataChange}
                id='secretword' type="text" placeholder='Favorite Word' style={styles.input}/>
                
                <input 
                onChange={onLoginDataChange}
                id='email' type="text" placeholder='Email' style={styles.input}/>
                
                <Pressable style={styles.button} onPress={SignUp}>
                    <Text style={{color: '#fff'}}>SINGUP</Text>
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
    switchText:{
        color: '#fff',
        margin: '5px',

        fontSize: 15,
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