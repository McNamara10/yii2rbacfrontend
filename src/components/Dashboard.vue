<template>

<div class="container">
  <template v-if="username">
       Sei loggato: {{ getUser }}
       <hr>
       Il Tuo Ruolo è: {{ getRole }}
      
  </template>
  <template v-else>
       <h1 style="color:red">Non sei loggato</h1>
  </template>
   
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  
  computed :{
    ...mapGetters('authentication', [
      'getUser'
    ]),
     ...mapGetters('authentication', [
      'getRole'
    ]),

    username(){
        return this.getUser ? this.getUser :false;
    },
   
   
  },
 methods : {
 
 }
}
</script>