<template>
  <mt-header>
    <router-link to="/" slot="left">
      <img src="../../images/logo.jpg" alt="" class="logo" @click='home'>
    </router-link>
    <mt-button slot="right" @click="handle">
     <Icon :type="icon" :size='size' :color='color'> </Icon>
    </mt-button>
  </mt-header>
</template>
<script>
  export default {
    components: {},
    props:{
     icon:{
      type:String
     },
     size:{
      type:[String,Number],
      default:24
     },
     color:{
      type:String,
      default:'black'
     }
    },
    data() {
      return {
      };
    },
    methods: {
     handle(){
      this.$emit('handle')
     },
     home(){
      this.$emit('home')
     }
    },
  };
</script>
