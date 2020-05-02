import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-6f791.firebaseio.com/'
});

export default instance;