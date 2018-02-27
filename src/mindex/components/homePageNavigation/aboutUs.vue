<template>
  <div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <div class="mfloor">
      <div class="title">公司简介</div>
      <p>爱WiFi是中国电信面向政企客户提供整体WiFi解决方案的品
牌，方便各类政企客户向其用户提供安全、稳定、高速、有保障
的WiFi上网服务。业务已经过多次国际性重大会议的锤炼，如G
20峰会、连续三届世界互联网大会、五国金砖会议等，同时积
极探索基于爱WiFi的个性化场景服务及大数据深度应用。
      </p>
      <p>2014年9月，中国电信集团成立全国爱WiFi业务运营中心，
中心设立在浙江杭州。在中国电信浙江分公司的指导下，浙江省
公众信息产业有限公司无线运营分公司为WiFi运营中心提供技术
支撑服务。
      </p>
      <p>中心目前现有成熟完善的大型场所WiFi覆盖解决方案，如无
线城市；也为满足各类客户需求，提供企业、商场、超市、酒店、
商铺、园区等各种中小型场所的WiFi覆盖解决方案；并以开放心
态向社会厂商提供有利于提升客户感知的各种合作，共同为用户
打造优质服务。
      </p>
    </div>
    <div class="mfloor mjoin">
        <div class="title">加入我们</div>
        <Menu width='auto'>
            <Submenu name="1">
                <template slot="title">
                    web前端开发主管
                </template>
                <MenuItem name="1-1">
                  <div class="mrow">
                    <p>工作职责：</p>
                    <p>1、管理前端开发团队日常工作的分配、代码检查；</p>
                    <p>2、负责前端核心代码。</p>
                  </div>
                  <div class="mrow">
                    <p>职位要求：</p>
                    <p>1、性格外向，善于沟通。本科计算机相关专业；</p>
                    <p>2、能够管理、协助5人左右前端团队日常开发；</p>
                    <p>3、html\css\js基础扎实，熟练使用；</p>
                    <p>4、对vue\react\anglar js等开源框架有1年学习、开发使用
                    经验。</p>
                  </div>
                  <div class="mrow">
                    <p>如有意向请将简历发送至：firstflm@189.cn，邮件标题请
                  注明：姓名+应聘岗位</p>
                  </div>
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    网络工程师
                </template>
                <MenuItem name="2-1">
                </MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    运维开发工程师
                </template>
                <MenuItem name="3-1">
                </MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    大数据开发工程师
                </template>
                <MenuItem name="4-1">
                </MenuItem>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    it支持工程师
                </template>
                <MenuItem name="5-1">
                </MenuItem>
            </Submenu>
            <Submenu name="6">
                <template slot="title">
                    dba数据库管理员
                </template>
                <MenuItem name="6-1">
                </MenuItem>
            </Submenu>
            <Submenu name="7">
                <template slot="title">
                    高级java开发工程师
                </template>
                <MenuItem name="7-1">
                </MenuItem>
            </Submenu>
            <Submenu name="8">
                <template slot="title">
                    业务支撑工程师
                </template>
                <MenuItem name="8-1">
                </MenuItem>
            </Submenu>
            <Submenu name="9">
                <template slot="title">
                    业务管理（ERP项目）
                </template>
                <MenuItem name="9-1">
                </MenuItem>
            </Submenu>
            <Submenu name="10">
                <template slot="title">
                    项目管理工程师
                </template>
                <MenuItem name="10-1">
                </MenuItem>
            </Submenu>
        </Menu>
    </div>
    <div class="mfloor">
      <div class="title">公司期刊</div>
      <ul class="mperiodical">
        <li v-for="(items,i) in periodical">
          <img :src="items.backgroundImage" alt="">
          <span>{{items.date}}</span>
        </li>
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
        banner:[{backgroundImage:'url(' + require('../../../images/mindex/aboutUs/banner.jpg') + ')'}],
        periodical:[
            {backgroundImage:require('../../../images/mindex/aboutUs/g1.jpg'),date:'2017-08  第11期'},
            {backgroundImage:require('../../../images/mindex/aboutUs/g2.jpg'),date:'2017-10  第12期'},
            {backgroundImage:require('../../../images/mindex/aboutUs/g3.jpg'),date:'2017-12  第13期'},
            {backgroundImage:require('../../../images/mindex/aboutUs/g4.jpg'),date:'2018-02  第14期'},
         ],
      }
    },
    methods:{
      
    }
  }
</script>
