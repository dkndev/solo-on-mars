import { acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore({
  id: 'CounterStore',
  state: () => {
    return {
      count: 0,
      name: 'Eduardo'
    }
  },

  actions: {
    increment () {
      this.count++
    }
  },

  getters: {
    getDoubleCount: (state) => {
      return state.count.value * 2
    }
  }

})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
