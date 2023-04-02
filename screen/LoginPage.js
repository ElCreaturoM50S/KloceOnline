import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';

export default function LoginScreen(){
    return (
        <View style={styles.view}>
            <form style={styles.form}>
                <Text style={styles.title}>
                    SIGN UP
                </Text>

                <input id='nazwa' type="text" placeholder='Nazwa' style={styles.input} />
                <input id='haslo' type="password" placeholder='Hasło' style={styles.input}/>
                <input id='wiek' type="text" placeholder='Wiek' style={styles.input}/>
                <input id='email' type="text" placeholder='Email' style={styles.input}/>
                <Pressable style={styles.button}>
                    <Text style={{color: '#fff'}}>SING UP</Text>
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
        margin: '20px',

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
  });