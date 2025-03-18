import { FlatList } from "react-native"
import ReminderCard from "./ReminderCard";
import { Reminder } from "@/src/types";

type ReminderListProps = {
    reminders: Reminder[];
}

const ReminderList: React.FC<ReminderListProps> = ({ reminders }) => {
    return (
        <FlatList
            data={reminders}
            renderItem={({ item }) => <ReminderCard reminder={item} />}
            keyExtractor={item => item.id}
        />
    )
}

export default ReminderList