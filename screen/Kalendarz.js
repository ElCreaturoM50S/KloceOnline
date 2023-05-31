import {
    View,
    Text,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Kloce() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Calendar/>
        <CalendarList/>
        <Agenda/>
      </View>
    )
  }