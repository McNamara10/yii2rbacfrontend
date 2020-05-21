<template>
<div class="container">
  <hr>
  <h1>Posts Create</h1>
  <form @submit.prevent="onSubmit">
    
  <button type="submit" class="btn btn-primary">Create</button>
</form>
<hr>
      
 </div>    
</template>

<script>
//import { mapGetters, mapActions } from 'vuex'
import * as Apiservice from '@/helpers/api.service'
export default {
  name: 'Posts',
  data() {
    return{
     
    }
  },
  computed :{

  },
 methods : {
      onSubmit(){
        Apiservice.post('/post/create')
        .then(res => {
            console.log('--------res')
            console.log(res);
        })
        .catch(error => console.log(error));  
    },
    }
 }

</script>