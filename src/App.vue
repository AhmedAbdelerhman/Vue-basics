<template>
 <div>
   <div  :style="{color :$store.state.counter.colorCode}" class="counter">
     {{counter.counter }}
     
     <sup>2</sup> =
     {{$store.getters.squared}}
   </div>
     <div class="buttons">
       <button @click="$store.dispatch('decrement')">-</button>
       <button @click="$store.dispatch('increments')">+</button>
     </div>
     <input v-model="colorCode" type="text">
 </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  components: {},
computed:{
  ...mapState(["counter"]), //get counter directly instate of $store.state.counter
  colorCode:{
    get(){  // get is a keyword
 return this.$store.state.counter.colorCode
    },
set(value){  //set is a keyword inside computed

this.$store.commit("setColorCode",value)

}

  }
},
  methods: {},
};
</script>
<style >
body{

  text-align: center;
}

.counter{

font-size: 3rem;

}

.buttons button {

font-size: larger;
padding:  20px;
margin: 0 20px;
border: none;
}

.buttons button:hover {

background-color:greenyellow ;
}

</style>
