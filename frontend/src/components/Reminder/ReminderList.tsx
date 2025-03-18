import { FlatList, StyleSheet } from "react-native"
import ReminderCard from "./ReminderCard";
import { Reminder } from "@/src/types";
import useReminders from "@/src/hooks/useReminders";

type ReminderListProps = {
    reminders: Reminder[];
}

const ReminderList: React.FC = () => {
    const { reminders, toggleReminderById } = useReminders()

    return (
        <FlatList
            data={reminders}
            renderItem={({ item }) => <ReminderCard onToggle={toggleReminderById} reminder={item} />}
            keyExtractor={item => item.id.toString()}
        />
    )
}


export default ReminderList