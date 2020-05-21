import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'


Vue.use(VueAxios,axios,store);

export function init(){
    console.log('Apiservice Init');
    this.setHeader();
 
}

export function setHeader(){
    console.log('Apiservice setHeader');
    var ambient = process.env.NODE_ENV;
    var apiUrl = process.env.VUE_APP_API_URL;
    console.log('Ambient');
    console.log(ambient);
    console.log('apiurl:'+ process.env.VUE_APP_API_URL);
    Vue.axios.defaults.baseURL= apiUrl;
    Vue.axios.defaults.headers.get['Accepts']= 'application/json';
    console.log('------------token');
    var token = window.localStorage.getItem('ACCESS_TOKEN');
   
    console.log(token);

    // verifico se esiste il token
    if(token){
        Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
       
    }
    
}


export function query(resource,params){
    return Vue.axios.get(`${resource}`,params);
}

export function get(resource){
    return Vue.axios.get(`${resource}`);
}

export function post(resource,params){
    return Vue.axios.post(`${resource}`,params);
}

export function update(resource,params){
    return Vue.axios.put(`${resource}`,params);
}

export function del(resource){
    return Vue.axios.delete(`${resource}`);
}


