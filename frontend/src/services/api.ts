export const API_URL = "http://192.168.15.140:3333"

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

export async function toggleReminder(id: string) {
    const response = await fetch(`${API_URL}/reminders/${id}/toggle`, {
        method: "PATCH"
    })

    if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`)
    }

    return response.json()

}