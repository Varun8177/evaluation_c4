import axios, { AxiosResponse } from "axios"
import { TodoType, UserData } from "./types"

const GetUsersInformationApi = async () => {
    // remove any
    let response: AxiosResponse<UserData[]> = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
}


const GetUsersTodoInfoApi = async (id: number) => {
    // remove any
    let response: AxiosResponse<TodoType[]> = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    return response.data
}

export { GetUsersInformationApi, GetUsersTodoInfoApi }