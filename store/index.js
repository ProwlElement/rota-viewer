// state
export const state = () => ({
  rotas: [],
  users: [],
  userRota: [],
})

// getters
export const getters = {
  rotas(state) {
    return state.rotas
  },
  users(state) {
    return state.users
  },
  userRota(state) {
    return state.userRota
  },
}

// actions
export const actions = {
  // rotas
  fetchRotas() {
    return fetch('https://my.api.mockaroo.com/rotas?key=727fabe0')
      .then((res) => res.json())
      .then((data) => {
        context.commit('setRotas', data)
      })
      .catch((err) => console.error(err))
  },
  // users
  fetchUsers() {
    return fetch('https://my.api.mockaroo.com/users?key=727fabe0')
      .then((res) => res.json())
      .then((data) => {
        context.commit('setUsers', data)
      })
      .catch((err) => console.error(err))
  },
  // users by id
  fetchRotaById(id) {
    return fetch(`https://my.api.mockaroo.com/rotas/${id}?key=727fabe0`)
      .then((res) => res.json())
      .then((data) => {
        context.commit('setUsers', data)
      })
      .catch((err) => console.error(err))
  },
}

// mutations
export const mutations = {
  setRotas(state, rotas) {
    state.rotas = rotas
  },
  setUsers(state, users) {
    state.users = users
  },
  setUserRota(state, userRota) {
    state.userRota = userRota
  },
}
