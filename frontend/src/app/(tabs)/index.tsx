import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import { ReminderList } from "@/src/components/Reminder";
import useReminders from "../../hooks/useReminders"

const Index = () => {
  const {reminders, loading } = useReminders()

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Olá, Fulano 👋</Text>
      {reminders.length > 0 ? (
        <ReminderList reminders={reminders} />
      ) : (
        <Text>Nenhum lembrete encontrado.</Text>
      )}
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

export default Index;