import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: '',
    },
    mutations: {
        setAlthToken(state, payload){
            state.authToken = payload;
        },
    }
});