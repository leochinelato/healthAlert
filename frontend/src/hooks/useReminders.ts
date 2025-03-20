import { useEffect, useState } from "react";
import { Reminder } from "../types";
import { API_URL, createReminder, fetchReminders, toggleReminder } from "../services/api";

const useReminders = () => {
    const [reminders, setReminders] = useState<Reminder[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadReminders = async () => {
            try {
                setLoading(true)
                const data = await fetchReminders()
                setReminders(data)
            } catch (err) {
                console.error("Failed to fetch reminders:", err)
                setError("Erro ao carregar lembretes")
            } finally {
                setLoading(false)
            }
        }
        loadReminders()
    }, [])


    const toggleReminderById = async (id: string) => {
        setError(null)

        setReminders((prev) =>
            prev.map((reminder) =>
                reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
            )
        )
        try {
            const updatedReminder = await toggleReminder(id)
            setReminders((prev) =>
                prev.map((reminder) =>
                    reminder.id === id ? updatedReminder : reminder
                )
            );
        } catch (error) {
            console.error(error)
            throw error
        }
    };

    const addReminder = async (title: string) => {
        setLoading(true)
        setError(null)

        try {
            const newReminder = await createReminder(title)
            setReminders((prev) => [...prev, newReminder])
        } catch (error) {
            setError("Erro ao adicionar reminder.")
        } finally {
            setLoading(false)
        }
    }


    return { reminders, loading, toggleReminderById, addReminder }
}

export default useReminders