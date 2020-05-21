<template>

<div class="container">
  <hr>
    Codice: {{ getCode }}
  <form @submit.prevent="onSubmit">
    <h2>Login al Sistema</h2>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="username" autocomplete="username">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">ssc

    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" autocomplete="password">
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
<hr>
      
 </div>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return{
      username : '',
      password : ''
    }
  },
  computed :{
    ...mapGetters('authentication', [
      'getCode'
    ]),
    ...mapActions('authentication', [
      'actionLogin'
    ]),
  },
 methods : {
 onSubmit(){
      /*const formData = {
        username : this.username,
        password : this.password
      }*/
      
      this.actionLogin.dispatch;
    }
 }
}
</script>