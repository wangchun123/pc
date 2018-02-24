<template>
  <div class="wrapper">
    <Row>
        <Col span="24">
          <div class="banner" :style='banner'></div>
        </Col>
    </Row>
     <Row>
        <Col span='24'>
          <div class="floor">
            <div class="title">背景需求</div>
            <ul class="baseRow extra demand-exp">
              <li v-for='(item,index) in demand' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
    <Row>
        <Col span="24">
            <div class="scheme" :style='scheme'>
              <div class="title">方案概述</div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col span='24'>
          <div class="floor">
            <div class="title">方案亮点</div>
            <ul class="baseRow bright">
              <li v-for='(item,index) in bright' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
    <Row>
        <Col span='24'>
          <div class="floor" style="background-color:#F0F0F0">
            <div class="title">成功案例</div>
            <ul class="baseRow extra example">
              <li v-for='(item,index) in example' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
  </div>
</template>
<style lang="scss">
@import '../../../css/solution.scss'
</style>
<script>
  export default{
    components: {
    },
    data(){
      return {
        banner:{backgroundImage:'url(' + require('../../../images/city/banner.jpg') + ')'},
        scheme:{backgroundImage:'url(' + require('../../../images/city/scheme.jpg') + ')'},
        demand:[
          {backgroundImage:'url(' + require('../../../images/city/e1.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/city/e2.png') + ')'}
        ],
        bright:[
          {backgroundImage:'url(' + require('../../../images/city/c1.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/city/c2.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/city/c3.png') + ')'}
        ],
        example:[
          {backgroundImage:'url(' + require('../../../images/city/d1.jpg') + ')'},
          {backgroundImage:'url(' + require('../../../images/city/d2.jpg') + ')'}
        ]
      }
    },
    methods:{
      
    }
  }
</script>
