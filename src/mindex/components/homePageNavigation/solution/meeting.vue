<template>
  <div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <div class="mfloor">
      <div class="title">行业需求</div>
      <div class="mdemand">
        <img v-for="(items,i) in mdemand" :src="items.backgroundImage">
      </div>
    </div>
    <div class="mimg" :style='img'></div>
    <div class="mfloor">
      <div class="title">方案亮点</div>
      <div class="item" v-for="(items,i) in list">
        <img :src="items.backgroundImage" alt="">
        <div class="chapter">
          <div class="title">{{items.title}}</div>
          <p>{{items.content}}</p>
        </div>
      </div>
    </div>
    <div class="mfloor">
      <div class="title">成功案例</div>
      <ul class="mcasus square">
        <img v-for="(items,i) in casus" :src="items.backgroundImage">
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    components: {
    },
    data(){
      return {
        banner:[{backgroundImage:'url(' + require('../../../../images/mindex/meeting/banner.jpg') + ')'}],
        img:{backgroundImage:'url(' + require('../../../../images/mindex/meeting/d1.jpg') + ')'},
        mdemand:[
            {backgroundImage:require('../../../../images/mindex/meeting/b1.png')},
            {backgroundImage:require('../../../../images/mindex/meeting/b2.png')},
            {backgroundImage:require('../../../../images/mindex/meeting/b3.png')},
            {backgroundImage:require('../../../../images/mindex/meeting/b4.png')}
           ],
        list:[
            {backgroundImage:require('../../../../images/mindex/meeting/j1.png'),title:'专线宽带',content:'中国电信万兆出口专线，以及电信级网络维护保障'},
            {backgroundImage:require('../../../../images/mindex/meeting/j2.png'),title:'页面安全',content:'爱WiFi监控管理后台（防页面篡改）'},
            {backgroundImage:require('../../../../images/mindex/meeting/j3.png'),title:'经验领先',content:'爱WiFi重大会议保障经验（世界互联网大会、G20杭州峰会、厦门金砖五国会议）'},
            {backgroundImage:require('../../../../images/mindex/meeting/j4.png'),title:'应用支持',content:'会务应用支持：开放接口，具备接入第三方会议应用或使用爱WiFi会务应用，实现智能会议'},
           ],
          casus:[
            {backgroundImage:require('../../../../images/mindex/meeting/c1.png')},
            {backgroundImage:require('../../../../images/mindex/meeting/c2.png')},
            {backgroundImage:require('../../../../images/mindex/meeting/c3.png')},
         ],
      }
    },
    methods:{
      
    }
  }
</script>
