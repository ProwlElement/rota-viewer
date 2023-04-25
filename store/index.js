// state
export const state = () => ({
  rotas: [],
  users: [],
  userRota: [],
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
  userRota(state) {
    return state.userRota
  },
  filteredRota(state) {
    return state.filteredRota
  },
}

// actions
export const actions = {
  // rotas
  async fetchAllRotas(context) {
    const data = await this.$axios.$get(
      'https://my.api.mockaroo.com/rotas?key=727fabe0'
    )
    console.log(data)
    context.commit('setRotas', data)
  },
  // users
  async fetchAllUsers(context) {
    const data = await this.$axios.$get(
      'https://my.api.mockaroo.com/users?key=727fabe0'
    )
    context.commit('setUsers', data)
  },
  // rota by id
  async fetchRotaById(context, id) {
    const data = await this.$axios.$get(
      `https://my.api.mockaroo.com/rotas/${id}?key=727fabe0`
    )
    context.commit('setUserRota', data)
  },
}

// mutations
export const mutations = {
  setRotas(state, rotas) {
    state.rotas = rotas
    state.filteredRota = rotas
  },
  setUsers(state, users) {
    state.users = users
    // opt1: filter out duplicate user ids
    // state.users = [...new Map(users.map((user) => [user.id, user])).values()]
    // opt2: filter out ids that dont exist in rotas
    // ...
  },
  setUserRota(state, userRota) {
    state.userRota = userRota
  },
  filterRotaById(state, id) {
    // filter populated rotas by chosen id so not to repeat api call
    state.filteredRota = state.rotas.filter((rota) => rota.userId === id)
  },
  findAllUserRotas(state) {
    console.log(state.filteredRota)

    // user id = multiple rotas

    // loop over filtered rotas and get array of rota id

    // loop over rota ids and call each rota by id to get most up to date rota

    // add each rota object back to an array to use (too many api calls)
  },
}
