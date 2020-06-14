
import apiInstance from './apiInstance'

export default{
    name: 'api',
    methods: {
        get(url){ return apiInstance.get(url); },
        post(url, data){ return apiInstance.get(url, data); },
        put(url, data){ return apiInstance.get(url, data); },
        delete(url, data){ return apiInstance.get(url); },
    }
}