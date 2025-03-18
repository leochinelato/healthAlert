import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Reminder } from '@/src/types'

type ReminderCardProps = {
  reminder: Reminder
  onToggle: (id: string) => void
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder, onToggle }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(reminder.id)} style={styles.container}>
      <View style={reminder.completed ? styles.doneCircle : styles.undoneCircle} />
      <Text style={reminder.completed ? styles.doneText : styles.undoneText}>
        {reminder.title}
      </Text>
    </TouchableOpacity>
  )
}

export default ReminderCard

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10
  },
  doneCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#2d2d2d"
  },
  doneText: {
    fontSize: 24,
    textDecorationLine: "line-through"
  },
  undoneCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: "#2d2d2d",
    borderWidth: 2
  },
  undoneText: {
    fontSize: 24,
  },
})