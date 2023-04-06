import {
    View,
    Text,
} from 'react-native';
import NewClock from '../components/Clock'
import countryList  from '../data/countryList'

export default function Zegar() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {countryList.map(info => <NewClock  clockCountry='en-GB' timeZone={info} />)}
      </View>
    )
  }


