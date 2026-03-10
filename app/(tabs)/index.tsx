import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState(
    'https://reactnative.dev/movies.json',
  );
  const [webData, setwebData] = useState(''); //State and react hooks
  const request = new XMLHttpRequest();

  function _handelPressButtonAsync() {
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('Success', +request.responseText);
        setwebData(
          'Status: ' +
            request.status +
            ' ' +
            request.statusText +
            ' ' +
            request.responseText +
            ' ' +
            request.response,
        );
      } else {
        console.warn('error');
        setwebData(
          'Error: ' +
            request.status +
            ' ' +
            request.statusText +
            ' ' +
            request.responseText,
        );
      }
    };
    request.open('GET', text);
    request.send();
  }
  return (
    <View style={styles.containerColume}>
      <View style={styles.containerRow}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
        <Button title="Go Request" onPress={() => _handelPressButtonAsync()} />
      </View>
      <Text> {webData} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColume: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    justifyContent: 'center',
  },
});
