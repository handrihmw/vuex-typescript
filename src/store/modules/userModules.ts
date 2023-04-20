import type { CommitFunction, userState, userDetailState } from '@/types'
import { userStoreEnum } from '@/types'

import axios from 'axios'

const state: userState = {
  detail: {
    loaded: false,
    loading: false,
    // data: []
    data: {
      id: '',
      name: '',
      username: '',
      email: '',
    }
  }
}

const getters = {
  [userStoreEnum.Getters.GET_USER](state: userState): userDetailState {

    return state.detail.data
  }
}

const mutations = {
  [userStoreEnum.Mutations.SET_USER](state: userState, details: any[]) {
    state.detail.data = details
    state.detail.loaded = true
  }
}

const actions = {
  async [userStoreEnum.Actions.FETCH_USER]({ commit }: CommitFunction) {
    // commit(userStoreEnum.Mutations.SET_USER_LOADING, true)

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')

      const detail = response.data || [];

      // console.log(details);

      commit(userStoreEnum.Mutations.SET_USER, detail)

    } catch (error) {
      console.log(error)
    }

    // commit(userStoreEnum.Mutations.SET_USER_LOADING, false)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
