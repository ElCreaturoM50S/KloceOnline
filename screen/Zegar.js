import {
    View,
    Text,
} from 'react-native';
import NewClock from '../components/Clock'

export default function Zegar() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NewClock></NewClock>
        <Text>Dziś jeszcze dorobie 5 innych zegarow</Text>
        <Text>😎</Text>
      </View>
    )
  }