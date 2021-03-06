
import apiInstance from './apiInstance'

export default {
    name: 'config',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use( (config) => {
                // config.headers.Authorization = this.$store.state.authToken;
                // return config;
                const newConfig = config;
                if(newConfig.url.indexOf('?') !== -1) newConfig.url += '&';
                else newConfig.url += '?';
                
                newConfig.url += `key=${this.$store.state.authToken}`;
                return newConfig;

            }, () => {
                this.$store.commit('showErrorMessage', 'Ops, Houve um problema ao enviar a requisição');
            });

            apiInstance.interceptors.response.use((response) =>{
                return response;
            }, () =>{
                this.$store.commit('showErrorMessage', 'Ops, Houve um problema ao enviar a requisição');
            });
        }
    }
}