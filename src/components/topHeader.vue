<template>
  <header id="topHeader">
    <div class="homeTop" @click="lineAfer(0)">
    <router-link to="/"><img src="../images/logo.jpg" alt=""></router-link>
    </div>
    <ul class="menu">
    <li :class="{'menuLink':line==0}">
      <router-link to="/index">首页</router-link>
    </li>
      <li class="document" @click="lineAfer(1)" :class="{'menuLink':line==1}">
        <a  @mouseenter='shownav("product")' @click="linkto('/product/OperationPlatform','product')">产品</a>
        <div class="documentList" ref='product'>
         <div class="container">
           <ul>
            <li class="one">WiFi服务<img src="../images/select.png"></li>
            <li><a @click="linkto('/product/OperationPlatform','product')"  class="aa">运营平台</a></li>
            <li><a @click="linkto('/product/OpenPlatform','product')"  class="bb">移动端开放平台</a></li>
          </ul>
           <!-- <ul>
            <li class="two">物联网服务<img src="../images/select.png"></li>
            <li><a href="http://iot.51awifi.com/portal#/container" target="_Blank"  class="cc">翼智云</a></li>
                     </ul>
           <ul>
            <li class="three">人工智能<img src="../images/select.png"></li>
            <li ><a @click="linkto('/wisdom','product')"  class="dd">智慧门店系统</a></li>
                     </ul>
                     <ul>
            <li class="four">视讯<img src="../images/select.png"></li>
            <li ><a @click="linkto('/VideoCloud','product')" class="ee">视讯云平台</a></li>
                     </ul> -->
         </div>
        </div>
      </li>
      <li class="document" @click="lineAfer(2)" :class="{'menuLink':line==2}">
        <a @mouseenter='shownav("solution")' @click='linkto("/solution/city","solution")'>解决方案</a>
       <div class="documentList" ref='solution'>
          <div class="p-solution">
             <a @click='linkto("/solution/city","solution")'>智慧城市</a>
             <a @click='linkto("/solution/hotel","solution")'>完美酒店联盟</a>
             <!-- <a @click='linkto("/solution/fire","solution")'>智慧消防</a> -->
             <a @click='linkto("/solution/meeting","solution")'>会议重保</a>
          </div>
       </div> 
      </li>
      <li @click="lineAfer(3)" :class="{'menuLink':line==3}">
        <router-link to="/cooperation">合作和生态</router-link>
      </li>
      <li @click="lineAfer(4)" :class="{'menuLink':line==4}">
        <router-link to="/help">帮助与支持</router-link>
      </li>
      <li @click="lineAfer(5)" :class="{'menuLink':line==5}">
        <router-link to="/aboutUs">关于我们</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import changeL from '../js/changeL'
  export default {
    components: {},
    props:{
     
    },
    data() {
      return {
        modal1: false,
        line: sessionStorage.index || "",
        url:'',
        ruleInline: {
          
        }
      };
    },
    methods: {
      lineAfer(index){
        if(index==0){
          // window.location.reload(); 
        } 
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
         //changeL.line(index);
        this.line = index;
        sessionStorage.index = index;
      },
      linkto(path,ref){
        ref?this.$refs[ref].style='display:none;':''
        this.$router.push({path})
      },
      shownav(ref){
        this.$refs[ref].style=''
      }
    },
  };
</script>

<style>
  @import "../css/reset.css";
  @import '../css/index.css';
 @import '../css/dropDown.css';
 .aa:hover{color: blue;}
 .bb:hover{color: blue;}
 .cc:hover{color: blue;}
 .dd:hover{color: blue;}
 .ee:hover{color: blue;}
 .p-solution {
  margin-left: 290px;
 }
 .menuLink>a{
  color: #2298fa!important;
 }
 .menu>li>a{
  display: inline-block;
  height: inherit;
 }
</style>
