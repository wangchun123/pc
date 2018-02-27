<template>
  <div class="home">
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <p class="mtitle">解决方案</p>
    <ul class="msolution">
      <li v-for="(items,i) in solution" :style='items.style' @click="linkto(items.path)">
        <p>{{items.title}} <Icon type="ios-arrow-right"></Icon></p>
      </li>
    </ul>
    <div class="mdata">
      <div v-for="(items,i) in data">
        <span :style="items.style"></span>
        <h2>{{items.title}}</h2>
        <p>{{items.content}}</p>
      </div>
    </div>
    <p class="mtitle">合作伙伴</p>
    <div class="partner">
      <ul v-for="(items,i) in partner">
        <li v-for="(item,z) in items.line" :style='item'></li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
    export default {
      components: {
      },
      data() {
        return {
          banner:[{backgroundImage:'url(' + require('../../images/mindex/banner.jpg') + ')'}],
          solution:[
            {style:{backgroundImage:'url(' + require('../../images/mindex/hotel.png') + ')'},title:'酒店客房',path:'/solution/hotel'},
            {style:{backgroundImage:'url(' + require('../../images/mindex/meeting.png') + ')'},title:'会议重保',path:'/solution/meeting'},
            {style:{backgroundImage:'url(' + require('../../images/mindex/city.png') + ')'},title:'无线城市',path:'/solution/city'},
          ],
          data:[
            {style:{backgroundImage:'url(' + require('../../images/mindex/usr.png') + ')'},title:'9000万+',content:'用户连接服务'},
            {style:{backgroundImage:'url(' + require('../../images/mindex/int.png') + ')'},title:'300万+',content:'设备接入服务'},
            {style:{backgroundImage:'url(' + require('../../images/mindex/cloud.png') + ')'},title:'40万+',content:'企业定制服务'},
          ],
          partner:[
            {
              line:[
                {backgroundImage:'url(' + require('../../images/mindex/p-hw.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-cw.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-rj.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-fh.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-sx.jpg') + ')'},
              ]
            },
            {
              line:[
                {backgroundImage:'url(' + require('../../images/mindex/p-cm.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-hgs.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-zx.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-hs.jpg') + ')'},
                {backgroundImage:'url(' + require('../../images/mindex/p-hx.jpg') + ')'},
              ]
            }
          ]
        }
      },
      methods: {
        linkto(path){
          this.$emit('handle',path)
        }
      },
      mounted() {
         
      },
    };
</script>
