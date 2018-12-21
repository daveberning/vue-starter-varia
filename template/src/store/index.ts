import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/types'

Vue.use(Vuex)

const state: RootState = {
  name: ''
}

const mutations: MutationTree<RootState> = {
  UPDATE_NAME(state: RootState, payload: string): void {
    state.name = payload
  }
}

const actions: ActionTree<RootState, RootState> = {
  updateName({ commit }, payload: string): void {
    commit('UPDATE_NAME', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
