import axios from 'axios'




export const api = axios.create({ baseURL: `https://git.heroku.com/desafio-mod-5.git` })


api.post('/cadastrar',)