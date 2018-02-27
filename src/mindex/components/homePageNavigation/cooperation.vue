<template>
  <div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <div class="mfloor">
      <div class="title">合作优势</div>
    </div>
    <ul class="mvertical madvantage">
      <li v-for="(items,i) in step"><img :src="items"></li>
    </ul>
    <div class="mfloor">
      <div class="title">合作益处</div>
      <div class="item" v-for="(items,i) in list">
        <img :src="items.backgroundImage" alt="">
        <div class="chapter">
          <div class="title">{{items.title}}</div>
          <p v-for='(item,z) in items.content'>{{item}}</p>
        </div>
      </div>
    </div>
    <div class="mcontact">
      <span>合作联系方式</span>
      <a href="tel:0571-87939259">0571-87939259</a>
    </div>
  </div>
</template>
<script>
  export default{
    components: {
    },
    data(){
      return {
        banner:[{backgroundImage:'url(' + require('../../../images/mindex/cooperation/banner.jpg') + ')'}],
        step:[
          require('../../../images/mindex/cooperation/s1.jpg'),
          require('../../../images/mindex/cooperation/s2.jpg'),
          require('../../../images/mindex/cooperation/s3.jpg')
        ],
        list:[
          {backgroundImage:require('../../../images/mindex/cooperation/j1.png'),title:'海量用户',content:['热点遍布全国，亿级用户直接引流']},
          {backgroundImage:require('../../../images/mindex/cooperation/j2.png'),title:'服务支持',content:['10000号承接故障，专人专线7*24小时在线服务']},
          {backgroundImage:require('../../../images/mindex/cooperation/j3.png'),title:'商机共享',content:['中国电信资源全面，提供优质商机']},
          {backgroundImage:require('../../../images/mindex/cooperation/j4.png'),title:'培训服务',content:['提供丰富的培训课程及实践，包括平台和终端等']},
          {backgroundImage:require('../../../images/mindex/cooperation/j5.png'),title:'市场营销',content:['合作伙伴可以爱WiFi合作伙伴身份在全国各地开展本地营销，爱WiFi帮助合作伙伴开展多渠道营销']},
          {backgroundImage:require('../../../images/mindex/cooperation/j6.png'),title:'合作共赢',content:['根据合作伙伴拓展的客户或项目所产生的利润，以分成模式达到双赢']},
         ],
      }
    },
    methods:{
      
    }
  }
</script>
