import axios from 'axios';

const instance=axios.create({
    baseUrl: '...'//the api url(cloud function)
});

export default instance;