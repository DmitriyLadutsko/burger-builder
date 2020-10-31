import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-7992d.firebaseio.com/'
});

export default instance;