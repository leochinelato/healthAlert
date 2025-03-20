export const API_URL = "http://192.168.15.152:3333"

export const fetchReminders = async () => {
    try {
        const response = await fetch(`${API_URL}/reminders`)
        if (!response.ok) {
            throw new Error("Error to search reminders!")
        }
        return await response.json()
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const toggleReminder = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/reminders/${id}/toggle`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: true })
        })

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        return await response.json()

    } catch (error) {
        console.error("Erro ao atualizar reminder:", error)
        throw error;
    }
}

export const createReminder = async (title: string) => {
    try {
        const response = await fetch(`${API_URL}/reminders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: title })
        })

        return await response.json()

    } catch (error) {
        console.error(error)
        throw error
    }

}