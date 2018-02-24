<template>
<div class="mindex">
  <mheader @handle="handle" :icon='icon' :size='iconSize' :color='iconColor'></mheader>
  
  <router-view></router-view>
  <mt-popup
  v-model="popupVisible"
  position="right"
  :modal=false
  class='mint-popup-3'
  >
  <mheader @handle="handleClose" :icon='navicon' :size='iconSize' :color='iconColor'></mheader>
  <Menu width='auto'>
        <MenuItem name="1">
            <Icon type="document-text"></Icon>
            首页
        </MenuItem>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                产品
            </template>
            <MenuItem name="2-1">运营平台</MenuItem>
            <MenuItem name="2-2">移动端开放平台</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                解决方案
            </template>
            <MenuItem name="3-1">智慧城市</MenuItem>
            <MenuItem name="3-2">完美酒店联盟</MenuItem>
            <MenuItem name="3-3">会议重保</MenuItem>
        </Submenu>
        <MenuItem name="4">
            <Icon type="document-text"></Icon>
            <router-link to="/cooperation">合作和生态</router-link>
        </MenuItem>
        <MenuItem name="5">
            <Icon type="document-text"></Icon>
            帮助与支持
        </MenuItem>
        <MenuItem name="6">
            <Icon type="document-text"></Icon>
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
  export default {
    name: 'app',
    components: {
      mheader
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
      handleClose(){
        this.popupVisible=false
      }
    }
  }
</script>
