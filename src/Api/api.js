import axios from "axios";
const url = "http://localhost:3000/task"
const addNewTask = async (formData) => {
    try {
        const response = await axios.post(url, formData);
        if (response.status === 201) {
            console.log(response.data);
        } else {
            console.error("Error adding new task:", response.responseText);
            throw new Error("Failed to add new task");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};
const getTasks = async () => {
    try {
        const response = await axios.get(url);

        if (response.status === 200) {
            const tasks = response;
            return tasks;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export { addNewTask, getTasks  }