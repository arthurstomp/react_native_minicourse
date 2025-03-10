import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your character</Text>
      <Link style={styles.button} href="/char/luigi">Luigi</Link>
      <Link style={styles.button} href="/char/peach">Peach</Link>
      <Link style={styles.button} href="/char/toad">Toad</Link>
      <Link style={styles.button} href="/char/mario">Mario</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 10
  },
  button: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    color: "white"
  }
});
