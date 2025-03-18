import { useEffect, useState } from "react";
import { Reminder } from "../types";
import { API_URL, fetchReminders, toggleReminder } from "../services/api";

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
                reminder.id === id ? {...reminder, completed: !reminder.completed} : reminder
            )
        )
        try {
            const response = await fetch(`${API_URL}/reminders/${id}/toggle`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ completed: true })
            })

            if (!response.ok) {
                throw new Error("Erro ao atualizar reminder.")
            }

            return await response.json()

        } catch (error) {
            console.error(error)
            throw error
        }
    };



    return { reminders, loading, toggleReminderById }
}

export default useReminders