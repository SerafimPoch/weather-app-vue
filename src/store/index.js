import Vue from "vue";
import Vuex from "vuex";
import { weatherApi } from "../api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    testData: state => {
      setTimeout(() => {
        return state.data[0].city.name;
      });
    }
  },
  mutations: {
    getDataApi: async state => {
      const dataApi = await weatherApi();
      return state.data.push(dataApi);
    }
  },
  actions: {
    getDataByCity: context => {
      context.commit("getDataApi");
    }
  }
});
