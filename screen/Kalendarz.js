import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Kalendarz() {
  const [selectedDates, setSelectedDates] = useState([]);

  function onDayPress(day) {
    const selectedDay = day.dateString;
    const isSelected = selectedDates.includes(selectedDay);

    if (isSelected) {
      setSelectedDates(selectedDates.filter(date => date !== selectedDay));
    } else {
      setSelectedDates([...selectedDates, selectedDay]);
    }
  }

  function clearSelectedDates() {
    setSelectedDates([]);
  }

  return (
    <View style={styles.container}>
      <Calendar onDayPress={onDayPress} markedDates={selectedDates.reduce((acc, cur) => ({ ...acc, [cur]: { selected: true } }), {})} />
      <View style={styles.selectedDatesContainer}>
        <Text style={styles.selectedDatesText}>Wybrane daty:</Text>
        
        {selectedDates.map((date, index) => (
          <Text key={index} style={styles.selectedDateText}>
            {date}
          </Text>
        ))}

        {selectedDates.length > 0 && (
          <TouchableOpacity onPress={clearSelectedDates} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Wyczyść wybrane daty</Text>
          </TouchableOpacity>
        )}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
  },
  selectedDatesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedDatesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedDateText: {
    fontSize: 16,
    marginBottom: 5,
  },
  clearButton: {
    marginTop: 10,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
  },
});
