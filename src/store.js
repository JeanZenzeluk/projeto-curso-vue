import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: '',
        logged: false,
        message: {
            text: '',
            type: '',
        }
    },
    mutations: {
        setAuthToken(state, payload){
            window.localStorage.authToken = payload,
            state.authToken = payload;
            state.logged = Boolean(state.authToken);
            console.log('state.logged: ' + state.logged);
        },
        showErrorMessage(state, payload){
            state.message = {
                text: payload,
                type: 'ERROR',
            }
        },
        showSuccessMessage(state, payload){
            state.message = {
                text: payload,
                type: 'SUCCESS',
            }
        },
        setLogged(state, payload){
            state.logged = payload;
        }
    }
});