import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Olá, Fulano 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#FFF",
    paddingHorizontal: 32,
    marginTop: Constants.statusBarHeight
  },
  mainText: {
    fontSize: 24
  }
})