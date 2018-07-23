import userAPI from '@/api/users'

export default {
  namespaced: true,

  state: {
    firstName: '',
    lastNmae: '',
    username: '',
    userid: '',
    email: '',
    jwtToken: '',
    authenticated: false
  },

  getters: {
    fullname: state => `${state.firstname} ${state.lastname}`,
    firstName: state => state.firstName,
    lastname: state => state.lastName,
    username: state => state.username,
    userid: state => state.userid,
    email: state => state.email,
    jwtToken: state => state.jwtToken,
    authenticated: state => state.authenticated
  },

  mutations: {

  },

  actions: {
    login ({commit}, credentials) {
      return new Promise((resolve, reject) => {
        userAPI.login(credentials)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            console.log('damnnnn girl')
          })
      })
    }
  }
}
