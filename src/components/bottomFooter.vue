<template>
<div class="footer">
  <div class="topicon">
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="bottom" style="height:250px">
  <section>
      <p class="title">合作与生态</p>
      <p><router-link to="/cooperation">合作优势</router-link></p>
      <p><router-link to="/cooperation">合作益处</router-link></p>
      <p>电话:&nbsp;&nbsp;&nbsp;0571-87939259</p>
  </section>
  <section>
    <p class="title">关于我们</p>
    <p><router-link to="/aboutUs">公司简介</router-link></p>
    <p><router-link to="/aboutUs">公司期刊</router-link></p>
    <p><router-link to="/aboutUs">加入我们</router-link></p>
   </section>
   <section>
    <p class="title">爱WiFi客户端</p>
    <img src="../images/code.png" alt="" >
    <p>安卓android手机扫描安装</p>
   </section>
  </div>
  <p class="p2">版权所有 © 2018 中国电信集团有限公司【增值电信业务经营许可证 A2.B1.B2-20090001】 ICP证号:京 ICP 备 09031924号</p>
  <p class="p1"></p>
  </div>
</div>
</template>

<script>
// import topHeader from './topHeader.vue'
import changeL from '../js/changeL'
    export default {
        components: {},
        data () {
          return {
            line: sessionStorage.index || "",
          }
        },
        methods: {
          lineAfer1(){
            //document.documentElement.scrollTop=0;
            //document.body.scrollTop=0;
         }
        }
    }
</script>

<style scoped>
@import '../css/footer.css';
.p1{
  background: url("../images/bottom.jpg") center center no-repeat;
  height:110px;
  width: 100%;
}
.p2{
  text-align: center;
 font-size:14px;
 margin-top: 35px;
}
.top{
  background: url("../images/service.jpg") center center no-repeat;
  height:200px;
  width: 100%;
}
.bottom{
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.bottom>section{
  padding:50px;
  flex:1;
}
.bottom p{
  padding-bottom: 24px;
  color: inherit;
}
.bottom p a{
  color: inherit;
}
.bottom p a:hover{
  color: #57a3f3;
}
.bottom>section:nth-child(2){
  border-left: 0.01rem solid #505465;
  border-right: 0.01rem solid #505465;
}
.bottom>section .title{
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 40px;
}
.bottom img{
  padding-bottom: 12px;
}
.bottom p{
  font-size: 14px;
}

.topicon ul{
  width: 100%;
  height: 240px;
  display: flex;
}
.topicon ul li{
  width: 100%;
}
.topicon ul li:nth-child(1){
  background: url('../images/footer/a1.jpg') center center no-repeat;
}
.topicon ul li:nth-child(2){
  background: url('../images/footer/a2.jpg') center center no-repeat;
}
.topicon ul li:nth-child(3){
  background: url('../images/footer/a3.jpg') center center no-repeat;
}
</style>
