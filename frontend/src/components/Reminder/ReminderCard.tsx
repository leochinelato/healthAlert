import { StyleSheet, Text, View } from 'react-native'
import { Reminder } from '@/src/types'

type ReminderCardProps = {
    reminder: Reminder
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder }) => {
  return (
    <View>
      <Text>{reminder.title}</Text>
    </View>
  )
}

export default ReminderCard

const styles = StyleSheet.create({})