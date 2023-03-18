import axios from "axios";

import {IUser} from "../interfaces";

let axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/users'
});

const getUsers=  () =>  axiosInstance.get('');
const postUser = (newUser: IUser) =>  axiosInstance.post('', newUser);

export {
    getUsers,
    postUser
}