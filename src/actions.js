import types from './types'
const actions = {
    set_users: ({commit}, user) => {
        commit(types.SET_USERS, user)
    }
}

export default actions;