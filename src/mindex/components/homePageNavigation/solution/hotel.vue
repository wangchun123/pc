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
            <p v-for='(item,z) in items.content'>{{item}}</p>
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
         banner:[{backgroundImage:'url(' + require('../../../../images/mindex/hotel/banner.jpg') + ')'}],
         img:{backgroundImage:'url(' + require('../../../../images/mindex/hotel/d1.jpg') + ')'},
         mdemand:[
            {backgroundImage:require('../../../../images/mindex/hotel/b1.png')},
            {backgroundImage:require('../../../../images/mindex/hotel/b2.png')},
            {backgroundImage:require('../../../../images/mindex/hotel/b3.png')},
            {backgroundImage:require('../../../../images/mindex/hotel/b4.png')}
           ],
         list:[
            {backgroundImage:require('../../../../images/mindex/hotel/j1.png'),title:'成本',content:['融合终端形式覆盖','建设成本低']},
            {backgroundImage:require('../../../../images/mindex/hotel/j2.png'),title:'安全',content:['满足公安上网要求']},
            {backgroundImage:require('../../../../images/mindex/hotel/j3.png'),title:'盈利',content:['客户管理及营销','提供客户后台管理微信吸粉功能']},
            {backgroundImage:require('../../../../images/mindex/hotel/j4.png'),title:'服务',content:['客房服务','周边信息推送','酒店营销']},
           ],
         casus:[
            {backgroundImage:require('../../../../images/mindex/hotel/c1.png')},
            {backgroundImage:require('../../../../images/mindex/hotel/c2.png')},
            {backgroundImage:require('../../../../images/mindex/hotel/c3.png')},
         ],
       }
    },
    methods:{
      
    }
  }
</script>
