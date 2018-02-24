<template>
  <div id="index">
    <!--头部导航区-->
   <nav>
      <topHeader ref='header'></topHeader>
   </nav>
    <!--中间内容区，采用containerWrap包裹进行切换对应路由区域-->
    <div class="containerWrap">
      <router-view></router-view> 
      <footer>
        <bottomFooter></bottomFooter>
      </footer>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import topHeader from './components/topHeader.vue';
  import bottomFooter from "./components/bottomFooter.vue";
  export default {
    name: 'app',
    components: {
      topHeader,bottomFooter
    },
    data () {
      return {
      }
    },
   
    mounted () {
    
    },
    methods:{
      navIndex(index){
        //this.$refs.header.lineAfer(index);
      }
    },
    watch:{
      '$route'(to){
        let router  = ['/index','/product','/solution','/cooperation','/help','/aboutUs']
        router.map((item,index)=>{
            if(!to.path.search(item)){
              this.$refs.header.lineAfer(index)
            }
        })
      }
    }
  }
</script>
<style>
  @import './css/reset.css';
  @import './css/index.css';

</style>
