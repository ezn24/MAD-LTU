import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter URL');
  return (
    <View style={styles.containerColume}>
      <View style={styles.containerRow}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
        <Button
          title="Click me"
          onPress={() => alert('Stop pressing my bottons' + text)}
        />
      </View>
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
