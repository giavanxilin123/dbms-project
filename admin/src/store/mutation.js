export const mutations = {
    FETCH_USER(state, payload) {
        state.allUsers = payload
        console.log(payload)
    },
}