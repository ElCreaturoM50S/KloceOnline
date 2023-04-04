import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function Kloce(props) {
  const dane = props.route.params.userData
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
        <Text style={styles.switchText}>Nazwa: {dane.nazwa}</Text>
        <Text style={styles.switchText}>Email: {dane.email}</Text>
        <Text style={styles.switchText}>Ulubione słowo: {dane.secretword}</Text>
      </View>
    )
  }


  const styles = StyleSheet.create({
    switchText:{
        color: '#fff',
        margin: '5px',

        fontSize: 15,
    },
  });