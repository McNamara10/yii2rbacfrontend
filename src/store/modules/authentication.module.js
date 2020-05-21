//import gAxios from 'axios'
import * as Apiservice from '@/helpers/api.service'
import router from '@/router'



const state = {
    accessToken : localStorage.getItem('ACCESS_TOKEN') || '',
    username : localStorage.getItem('USER_TOKEN') || '',
    password : null,
    role: localStorage.getItem('ROLE_TOKEN') || ''
};

const actions = {
    actionLogout({commit}){
        commit('authClear');
        router.push('/login');
        window.localStorage.removeItem('ACCESS_TOKEN');
    },
    actionLogin({commit},formData){
        Apiservice.post('/user/login',
        {
          username : formData.username,
          password : formData.password,
        })
        .then(res => {
            this.accessToken = res.data.access_token;
            window.localStorage.setItem('ACCESS_TOKEN',res.data.access_token);
            window.localStorage.setItem('USER_TOKEN',res.data.username);
            window.localStorage.setItem('ROLE_TOKEN',res.data.role);
           
            console.log('--------res')
             commit('setCode',{
                 accessToken : res.data.access_token,
             }
             );
             commit('setUser',{
                username : res.data.username,
                password : res.data.password   
            });

            commit('setRole',{
                role : res.data.role,
                   
            });
           
          
           
           
            
            router.push('/dashboard');
            console.log(res);
        })
        .catch(error => console.log(error));  
    },
};
const mutations = {
    setCode(state,userData){
        if(userData.accessToken) {
            state.accessToken = userData.accessToken;
            console.log('userData');
            console.log(userData);
        }   
    },
    setUser(state,userData){
        if(userData.username) {
            state.username = userData.username;
            state.password = userData.password;
            console.log('userData nickname');
            console.log(userData.username);
        }
    
    },
    setRole(state,userData){
        if(userData.role) {
        console.log('userData mutations role');
            state.role = userData.role;
            console.log(userData.role);
        }else{
            console.log('ruolo non esistente');
        }
    },
    authClear(state){
        if(state.accessToken) {
           state.accessToken = null;
        }
    },
    
};

const getters = {
   getCode : state => {
       return state.accessToken;  
   },
   getUser : state => {
    return state.username;  
   },
   getRole : state => {
    return state.role;  
   
   },
   getPassword : state => {
    return state.password;  
   },
   isAuth : state => {
    return state.accessToken !== null;  
   },


};

export default {
    namespaced : true,
    state,
    mutations,
    getters,
    actions
}