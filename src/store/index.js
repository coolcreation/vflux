

import Vuex from 'vuex';
import Vue from 'vue';
import store from './store' // importing file from store directory store.js — the heart of our store were
                                               // we are storing state, actions, mutations and getters 


// Load Vuex
Vue.use(Vuex);

// Create store Instance
const store = new Vuex.Store({
  modules: {
    store,

  }
});

export default store;