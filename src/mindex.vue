<template>
<div class="mindex">
  <mheader @handle="handle" :icon='icon' :size='iconSize' :color='iconColor'></mheader>
  <router-view @handle="linkto"></router-view>
  <mfooter @handle='linkto'></mfooter>
  <mt-popup
  v-model="popupVisible"
  position="right"
  :modal=false
  class='mint-popup-3'
  >
  <mheader @handle="handleClose" @home="home" :icon='navicon' :size='iconSize' :color='iconColor'></mheader>
  <Menu width='auto' @on-select='linkto'>
        <Submenu name="2">
            <template slot="title">
                产品
            </template>
            <MenuItem name="/product/OperationPlatform" >运营平台</MenuItem>
            <MenuItem name="/product/OpenPlatform">移动端开放平台</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                解决方案
            </template>
            <MenuItem name="/solution/city">智慧城市</MenuItem>
            <MenuItem name="/solution/hotel">完美酒店联盟</MenuItem>
            <MenuItem name="/solution/meeting">会议重保</MenuItem>
        </Submenu>
        <MenuItem name="/cooperation">合作和生态</MenuItem>
        <MenuItem name="/help">
            帮助与支持
        </MenuItem>
        <MenuItem name="/aboutUs">
            关于我们
        </MenuItem>
    </Menu>
</mt-popup>
  
</div>
</template>
<style lang="scss">
@import './mindex/css/index.scss'
</style>
<script>
  import mheader from './mindex/components/topHeader.vue'
  import mfooter from './mindex/components/bottomFooter.vue'
  export default {
    name: 'app',
    components: {
      mheader,mfooter
    },
    data () {
      return {
        icon:'android-menu',
        navicon:'android-close',
        iconSize:28,
        iconColor:"#495060",
        popupVisible:false
      }
    },
   
    mounted () {

    },
    methods:{
      handle(){
        this.popupVisible=true
      },
      home(){
        this.popupVisible=false
      },
      handleClose(){
        this.popupVisible=false
      },
      linkto(path){
        this.$router.push({path})
        scrollTo(0,0)
        this.popupVisible=false
      }
    }
  }
</script>
