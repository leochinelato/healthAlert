import { useEffect, useState } from "react";
import { Reminder } from "../types";
import { fetchReminders } from "../services/api";

const useReminders = () => {
    const [reminders, setReminders] = useState<Reminder[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadReminders = async () => {
            setLoading(true)
            const data = await fetchReminders()
            setReminders(data)
            setLoading(false)
        }

        loadReminders()
    }, [])

    return { reminders, loading }
}

export default useReminders