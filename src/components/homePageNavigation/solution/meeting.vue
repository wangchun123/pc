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
            <div class="title">行业需求</div>
            <ul class="baseRow demand">
              <li v-for='(item,index) in demand' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
    <Row>
        <Col span="24">
            <div class="scheme" :style='scheme'>
              <div class="title">解决方案</div>
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
            <ul class="baseRow example">
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
        banner:{backgroundImage:'url(' + require('../../../images/meeting/banner.jpg') + ')'},
        scheme:{backgroundImage:'url(' + require('../../../images/meeting/scheme.jpg') + ')'},
        demand:[
          {backgroundImage:'url(' + require('../../../images/meeting/e1.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/e2.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/e3.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/e4.png') + ')'},
        ],
        bright:[
          {backgroundImage:'url(' + require('../../../images/meeting/c1.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/c2.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/c3.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/c4.png') + ')'},
        ],
        example:[
          {backgroundImage:'url(' + require('../../../images/meeting/d1.jpg') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/d2.jpg') + ')'},
          {backgroundImage:'url(' + require('../../../images/meeting/d3.jpg') + ')'},
        ]
      }
    },
    methods:{
      
    }
  }
</script>
