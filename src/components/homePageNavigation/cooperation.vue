<template>
  <div class="wrapper">
    <Row>
        <Col span="24">
          <div class="banner" :style='banner'></div>
        </Col>
    </Row>
     <Row>
        <Col span='24'>
          <div class="floor" style="background:#f8f8f8;">
            <div class="title">合作优势</div>
            <ul class="baseRow advantage">
              <li v-for='(item,index) in advantage' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
   <Row>
        <Col span='24'>
          <div class="floor">
            <div class="title">合作益处</div>
            <ul class="baseRow benefit">
              <li v-for='(item,index) in benefit' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
    <Row>
        <Col span='24'>
          <div class="floor" style="background:#f8f8f8;">
            <ul class="baseRow service">
              <li v-for='(item,index) in service' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
  </div>
</template>
<style lang="scss">
@import '../../css/solution.scss'

</style>
<script>
  export default{
    components: {
    },
    data(){
      return {
        banner:{backgroundImage:'url(' + require('../../images/cooperation/banner.jpg') + ')'},
        advantage:[
          {backgroundImage:'url(' + require('../../images/cooperation/e1.jpg') + ')'},
          {backgroundImage:'url(' + require('../../images/cooperation/e2.jpg') + ')'},
          {backgroundImage:'url(' + require('../../images/cooperation/e3.jpg') + ')'},
        ],
        benefit:[
          {backgroundImage:'url(' + require('../../images/cooperation/f1.jpg') + ')'},
        ],
        service:[
          {backgroundImage:'url(' + require('../../images/cooperation/s1.jpg') + ')'},
        ]
      }
    },
    methods:{
      
    }
  }
</script>
