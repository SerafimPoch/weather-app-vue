import Vue from "vue";
import Vuex from "vuex";
import { weatherApi } from "./api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: { city: "" }
  },
  getters: {
    city: state => {
      return state.data.city;
    }
    // tempCelc: state => {
    //   return state.data[0].list[0].main.temp;
    // }
  },
  mutations: {
    getDataApi: (state, city) => {
      return weatherApi(city).then(
        weathApi => (state.data.city = weathApi.city.name)
      );
    }
  },
  actions: {
    getDataByCity: (context, city) => {
      context.commit("getDataApi", city);
    }
  }
});
