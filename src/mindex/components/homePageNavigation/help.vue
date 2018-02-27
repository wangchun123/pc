<template>
  <div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item  v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <div class="mfloor">
      <div class="title">用户联网步骤</div>
    </div>
    <ul class="mvertical mstep">
      <li v-for="(items,i) in step"><img  :src="items"></li>
    </ul>
  </div>
</template>
<script>
  export default{
    components: {
    },
    data(){
      return {
        banner:[{backgroundImage:'url(' + require('../../../images/mindex/help/banner.jpg') + ')'}],
        step:[
          require('../../../images/mindex/help/s1.jpg'),
          require('../../../images/mindex/help/s2.jpg'),
          require('../../../images/mindex/help/s3.jpg')
        ]
      }
    },
    methods:{
      
    }
  }
</script>
