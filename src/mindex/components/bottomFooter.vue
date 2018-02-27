<template>
<div class="mfooter">
      <div class="mservice">
        <div v-for="(items,i) in service">
          <span :style="items.style"></span>
          <p>{{items.content}}</p>
        </div>
      </div>
      <div class="mlink">
        <div>
          <h4>合作与生态</h4>
          <p @click="linkto('/cooperation')">合作优势</p>
          <p @click="linkto('/cooperation')">合作益处</p>
          <p>联系方式：</p>
          <p class="mcolor"><a href="tel:0571-87939259">0571-87939259</a></p>
        </div>
        <div>
          <h4>关于我们</h4>
          <p @click="linkto('/aboutUs')">公司简介</p>
          <p @click="linkto('/aboutUs')">加入我们</p>
          <p @click="linkto('/aboutUs')">公司期刊</p>
        </div>
      </div>
      <div class="mapp">
        <h2>爱WiFi客户端</h2>
        <img src="../../images/mindex/app.png" alt="" width="120">
        <p>安卓Android手机扫描安装</p>
      </div>
      <div class="mcopyright">
        <p>版权所有 © 2018中国电信集团有限公司</p>
        <p>【增值电信业务经营许可证A2.B1.B2-20090001】</p>
        <p>证号：京 ICP 备<span class="mcolor">09031924</span>号</p>
        <div class="micon">
          <img v-for='(items,i) in copyright' :src="items" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data () {
          return {
            service:[
              {style:{backgroundImage:'url(' + require('../../images/mindex/serviceIcon.png') + ')'},content:'7*24小时客户支持'},
              {style:{backgroundImage:'url(' + require('../../images/mindex/saleIcon.png') + ')'},content:'1小时内售后响应'},
              {style:{backgroundImage:'url(' + require('../../images/mindex/clientServiceIcon.png') + ')'},content:'1对1大客户服务'},
            ],
            copyright:[require('../../images/mindex/q1.jpg'),require('../../images/mindex/q2.jpg'),require('../../images/mindex/q3.jpg'),require('../../images/mindex/q4.jpg')]
            }
        },
        methods: {
          linkto(path){
            this.$emit('handle',path)
          }
        }
    }
</script>
