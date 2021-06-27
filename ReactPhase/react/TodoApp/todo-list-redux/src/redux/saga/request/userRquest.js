import axios from 'axios'

export function requestGetUser() {
    return axios.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos'
 })   
}