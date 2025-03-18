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

fetch("http://192.168.15.140:3333/reminders")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Erro na requisição:", error));