import {createRequestClient} from '~/store/request-client';
export const state = () => ({
    items: [],
    meta: {},
})

export const actions = {
    async fetchPopularVideos({commit}, payload) {
        console.log("check1")
        const client = createRequestClient(this.$axios)
        console.log("check2")
        console.log(payload)
        const res = await client.get(payload.uri, payload.params)
        console.log("check3")
        commit('mutatePopularVideos', res)
    },
}

export const mutations = {
    mutatePopularVideos(state, payload) {
        state.items = payload.items ? state.items.concat(payload.items) : []
        state.meta = payload
    }
}

export const getters = {
    getPopularVideos(state) {
        return state.items
    },
}