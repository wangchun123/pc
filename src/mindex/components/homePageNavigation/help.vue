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
            <div class="title">用户联网步骤</div>
            <ul class="baseRow step">
              <li v-for='(item,index) in step' :style='item'></li>
            </ul>
          </div>
        </Col>
    </Row>
   <!-- <Row>
        <Col span='24'>
          <div class="floor helpdoc">
            <div class="title">帮助文档</div>
            <Row style='textAlign:center'>
              <Col span='8'>
                <router-link to="/help">爱WIFI完美酒店FAQ</router-link>
              </Col>
              <Col span='8'>
                <router-link to="/help">爱WIFI微站用户操作手册</router-link>
                <router-link to="/help">爱WIFI微站商户操作手册</router-link>
              </Col>
              <Col span='8'>
                <router-link to="/help">园区用户使用指南</router-link>
                <router-link to="/help">爱WIFI园区FAQ</router-link>
              </Col>
            </Row>
          </div>
        </Col>
    </Row> -->
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
        banner:{backgroundImage:'url(' + require('../../images/help/banner.jpg') + ')'},
        step:[{backgroundImage:'url(' + require('../../images/help/step.jpg') + ')'}]
      }
    },
    methods:{
      
    }
  }
</script>
