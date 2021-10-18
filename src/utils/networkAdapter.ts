import axios from 'axios'


const headers = {
    'Content-Type': 'application/json'
}
const opts = {
    headers,
    // withCredentials:true
}
export function getData(url: string,options = opts){
    return axios.get(url,options)
}

export function insertData(url: string,values: any, options = opts){
    return axios.post(url,values,options)
}

export function updateData(url: string, values: any, options = opts){
    return axios.put(url,values,options)
}

export function deleteData(url: string,options = opts){
    return axios.delete(url,options)
}