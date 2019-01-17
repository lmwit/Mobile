import types from './types'
const mutations = {
    [types.SET_USERS] (state, user) {
        if (user) {
            state.user = user;
        } else {
            state.user = {};
        }
    }
}

export default mutations;