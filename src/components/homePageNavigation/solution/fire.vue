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
            <ul class="baseRow extra demand-sinpic">
              <li v-for='(item,index) in demand' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
    <Row>
        <Col span="24">
            <div class="floor" style="background-color:#F8F8F8">
              <div class="title">方案概述</div>
              <ul class="baseRow schemeSummarize">
                <li v-for='(item,index) in schemeSummarize' :style='item'></li>
              </ul>
            </div>
        </Col>
    </Row>
    <Row>
        <Col span='24'>
          <div class="floor">
            <div class="title">方案形态</div>
            <ul class="baseRow schemeFormation">
              <li v-for='(item,index) in schemeFormation' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
    <Row>
        <Col span='24'>
          <div class="floor" style="background-color:#F8F8F8">
            <div class="title">成功案例</div>
            <ul class="baseRow extra example2">
              <li v-for='(item,index) in example2' :style='item'></li>
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
        banner:{backgroundImage:'url(' + require('../../../images/fire/banner.jpg') + ')'},
        demand:[
          {backgroundImage:'url(' + require('../../../images/fire/e1.png') + ')'},
        ],
        schemeSummarize:[
          {backgroundImage:'url(' + require('../../../images/fire/c1.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/fire/c2.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/fire/c3.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/fire/c3.png') + ')'},
        ],
        schemeFormation:[
          {backgroundImage:'url(' + require('../../../images/fire/f1.jpg') + ')'}
        ],
        example2:[
          {backgroundImage:'url(' + require('../../../images/fire/d1.png') + ')'},
          {backgroundImage:'url(' + require('../../../images/fire/d2.png') + ')'}
        ]
      }
    },
    methods:{
      
    }
  }
</script>
