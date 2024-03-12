import axios from "axios"

export const employeeApi = async (methodName, url, body) => {
    try {
        if (methodName === 'get') {
            const result = await axios.get(url)
            return result;
        }
        if (methodName === 'post') {
            const result = await axios.post(url, body)
            return result;
        }
    } catch (err) {
        console.log(err)
    }
}
