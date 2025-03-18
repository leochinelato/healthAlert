import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Calendário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 32,
    marginTop: Constants.statusBarHeight
  },
  mainText: {
    fontSize: 24
  }
})

export default Calendar;