import Vue from 'vue';
import Vuex from 'vuex';
import { weatherApi } from './api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    city: '',
    temp: '',
    description: ''
  },
  getters: {
    city: state => {
      return state.city;
    },
    temp: state => {
      return state.temp;
    },
    descrip: state => {
      return state.description;
    }
  },
  mutations: {
    getDataApi: async (state, city) => {
      const resp = await weatherApi(city);
      const obj = {
        city: resp.city.name,
        temp: Math.round(resp.list[0].main.temp - 273.15),
        description: resp.list[0].weather[0].description
      };
      return Object.assign(state, obj);
    }
  },
  actions: {
    getDataByCity: (context, city) => {
      context.commit('getDataApi', city);
    }
  }
});
