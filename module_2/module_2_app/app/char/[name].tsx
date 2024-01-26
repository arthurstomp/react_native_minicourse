import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function CharPage() {
  const { name } = useLocalSearchParams();
  const clickBack = () => {
    router.back()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Char name: {name}</Text>
      <TouchableOpacity style={styles.button} onPress={clickBack}>
        <Text style={{color: 'white'}}>Go back</Text>
      </TouchableOpacity>
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
