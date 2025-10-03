import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTViMDIxNzZkODE4OWY4M2Y1YmQ0NjQyYzMxYTA5NSIsIm5iZiI6MTc1OTQzNDI0MS40MjIwMDAyLCJzdWIiOiI2OGRlZDYwMTBkZjQ0NmY2NGI0MDVmZGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LsOfZwsBvLeyc4tWjEoXHJP-_v4NZv1ZHhcftx9CLPM'
    },
});

export default api;