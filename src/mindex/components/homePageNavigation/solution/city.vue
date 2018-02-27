<template>
  <div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <div class="mfloor">
      <div class="title">背景需求</div>
      <p>
        “智慧城市”是信息化和城市化深度融合的必然结果，是在新一代信息技术和知识经济加速发展的背景下，以智慧基础设施为支撑，以信息技术高度集成，信息资源深度开发和应用智慧化为主要特征，以智慧产业、智慧服务、智慧管理、智慧生活等为重要内容的城市发展新模式。政府希望打造智慧城市，让市民充分享受到无线网络带来的便利生活。
      </p>
    </div>
    <div class="mimg" :style='img'></div>
    <div class="mfloor">
        <div class="title">产品功能</div>
        <div class="item">
          <img src="../../../../images/mindex/city/j1.png" alt="">
          <div class="chapter">
            <div class="title">互通</div>
            <p>城市互联互通、应用丰富</p>
          </div>
        </div>
        <div class="item">
          <img src="../../../../images/mindex/city/j2.png" alt="">
          <div class="chapter">
            <div class="title">共享</div>
            <p>通过众筹共建共享模式，降低政府及企业投入资本</p>
          </div>
        </div>
        <div class="item">
          <img src="../../../../images/mindex/city/j3.png" alt="">
          <div class="chapter">
            <div class="title">PUSH</div>
            <p>双SSID模式，符合政府智慧城市建设要求，满足政务、商务信息交互充分等，也符合运营商WiFi后向运营商业价值探索以及基础大数据收集</p>
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
        banner:[{backgroundImage:'url(' + require('../../../../images/mindex/city/banner.jpg') + ')'}],
        img:{backgroundImage:'url(' + require('../../../../images/mindex/city/b1.jpg') + ')'},
        casus:[
            {backgroundImage:require('../../../../images/mindex/city/c1.png')},
            {backgroundImage:require('../../../../images/mindex/city/c2.png')},
         ],
      }
    },
    methods:{
      
    }
  }
</script>
