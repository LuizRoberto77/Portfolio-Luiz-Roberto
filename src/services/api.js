import axios from 'axios';

const api = axios.create({ 
	baseURL:'https://api.github.com/users/LuizRoberto77' 
});

export default api;