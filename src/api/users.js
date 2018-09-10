import axios from 'axios'

export default {
  login (credentials) {
    return axios
      .post('http://localhost:3000/api/Users/login', credentials)
  }
}
