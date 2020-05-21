<template>
  <div id="app">
    <div id="nav">
    
      <hr>
      <h1>Autenticato: {{ isAuth }}</h1>
      <router-link to="/">Home</router-link> |
      <router-link v-if="isAuth" to="/about">About</router-link> |
      <router-link v-if="!isAuth" to="/login">Login</router-link> |
      <router-link v-if="isAuth" to="/dashboard">Dashboard</router-link> |
       <router-link v-if="isAuth" to="/posts">Posts</router-link> |
      <a href="#" @click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import * as Apiservice from '@/helpers/api.service'
//import * as Callapi from '@/helpers/callapi.service'
import { mapGetters, mapActions } from 'vuex'
Apiservice.init();

export default {
  name : 'app',
  component : 'App',

   mounted() {
    console.log("Montato");
    console.log(process.env.VUE_APP_API_URL);
  },
  computed :{
    ...mapGetters('authentication', [
      'isAuth'
    ]),
    ...mapActions('authentication', [
      'actionLogout'
    ]),
  },
  methods : {
    logout() {
      this.actionLogout.dispatch;
    }
  }

}

</script>


