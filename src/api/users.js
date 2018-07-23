import axios from 'axios'

export default {
  login (credentials) {
    return axios
      .post('http://localhost:3000/Users/login', credentials)
  }
}
