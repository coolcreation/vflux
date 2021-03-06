/*   Jeff Bohn    3/16/2021    Lab #17   Number Display  */





const state = {
  numbers: [1, 2, 3]
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload);
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});