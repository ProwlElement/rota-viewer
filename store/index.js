// state
export const state = () => ({
  rotas: [],
  users: [],
  filteredRota: [],
})

// getters
export const getters = {
  rotas(state) {
    return state.rotas
  },
  users(state) {
    return state.users
  },
  filteredRota(state) {
    return state.filteredRota
  },
}

// actions
export const actions = {
  // rotas
  fetchAllRotas(context) {
    return fetch('https://my.api.mockaroo.com/rotas?key=727fabe0')
      .then((res) => res.json())
      .then((data) => {
        context.commit('setRotas', data)
      })
      .catch((err) => console.error(err))
  },
  // users
  fetchAllUsers(context) {
    return fetch('https://my.api.mockaroo.com/users?key=727fabe0')
      .then((res) => res.json())
      .then((data) => {
        context.commit('setUsers', data)
      })
      .catch((err) => console.error(err))
  },
  // user rota by id
  // fetchRotaById(context, id) {
  //   return fetch(`https://my.api.mockaroo.com/rotas/${id}?key=727fabe0`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       context.commit('setUserRota', data)
  //     })
  //     .catch((err) => console.error(err))
  // },
  // // filter
  // filterRotaById(context, id) {
  //   context.commit('setFilteredRota', this.s)
  // }
}

// mutations
export const mutations = {
  setRotas(state, rotas) {
    state.rotas = rotas
    state.filteredRota = rotas
  },
  setUsers(state, users) {
    // opt1: filter out duplicate user ids
    state.users = [...new Map(users.map((user) => [user.id, user])).values()]
    // opt2: filter out ids that dont exist in rotas
    // ...
  },
  setUserRota(state, userRota) {
    state.userRota = userRota
  },
  filterRotaById(state, id) {
    state.filteredRota = state.rotas.filter((rota) => rota.userId === id)
  },
}
