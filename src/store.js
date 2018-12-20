import Vue from "vue";
import Vuex from "vuex";
import { weatherApi } from "./api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    city: state => {
      return state.data[0].city.name;
    },
    tempCelc: state => {
      return state.data[0].list[0].main.temp;
    }
  },
  mutations: {
    getDataApi: state => {
      return weatherApi().then(wethApi => state.data.push(wethApi));
    }
  },
  actions: {
    getDataByCity: context => {
      context.commit("getDataApi");
    }
  }
});
