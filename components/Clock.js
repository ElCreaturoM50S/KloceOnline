import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { createTextShadowValue } from "react-native-web/dist/cjs/exports/StyleSheet/preprocess";

export default function NewClock(props) {
  const [time, setTime] = useState("Loading");

  useEffect(() =>{
    const intervalId = setInterval(() => {
      let now = new Date()

      let greatDate = (now.toLocaleString(props.clockCountry, { timeZone: props.timeZone }))
      setTime(props.timeZone.concat(' - ',greatDate));
    }, 1000);
  return () => clearInterval(intervalId); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.clock}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  clock:{
    fontSize: 40,
    margin: '15px',
    textShadowColor: 'rgba(255, 255, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  }
});