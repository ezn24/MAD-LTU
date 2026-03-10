import { Button, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.containerColume}>
      <View style={styles.containerRow}>
        <Button
          title="Click me"
          onPress={() => alert('Stop pressing my bottons')}
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
});
