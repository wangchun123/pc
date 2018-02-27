<template>
  <div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
    </mt-swipe>
    <div class="mfloor">
        <div class="title">产品功能</div>
        <Menu width='auto'>
            <Submenu name="1">
                <template slot="title">
                    安全认证
                </template>
                <MenuItem name="1-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    权限管理
                </template>
                <MenuItem name="2-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    智能营销
                </template>
                <MenuItem name="3-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    增值服务
                </template>
                <MenuItem name="4-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    数据分析
                </template>
                <MenuItem name="5-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
            <Submenu name="6">
                <template slot="title">
                    安全审计
                </template>
                <MenuItem name="6-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
            <Submenu name="7">
                <template slot="title">
                    策略管理
                </template>
                <MenuItem name="7-1">
                  支持多种安全认证方式，包括手机号码认证、微信认证
等，通过认证获取客户资料等信息。
                </MenuItem>
            </Submenu>
        </Menu>
      </div>
      <div class="mfloor">
        <div class="title">产品功能</div>
        <ul class="mproduct">
          <li v-for="(items,i) in product" >
            <span :style="items.style"></span>
            <p>{{items.content}}</p>
          </li>
        </ul>
      </div>
      <div class="mfloor mswiper">
        <div class="title">应用场景</div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(items,i) in swiper"><img :src="items" alt=""></swiper-slide>
          </swiper>
      </div>
      <div class="mfloor">
        <div class="title">客户案例</div>
        <ul class="mcasus rectangle">
          <img v-for="(items,i) in casus" :src="items.backgroundImage"> 
        </ul>
      </div>
      <div class="mfloor">
        <div class="title">帮助文档</div>
        <div class="mhelp">
          <span>爱WiFi业务FAQ</span>
          <Icon type="ios-arrow-right"></Icon>
        </div>
      </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
      components: {
        swiper,
        swiperSlide
      },
      data() {
        return {
           banner:[{backgroundImage:'url(' + require('../../../images/mindex/operationPlatform/banner.jpg') + ')'}],
           casus:[
              {backgroundImage:require('../../../images/mindex/operationPlatform/c1.png')},
              {backgroundImage:require('../../../images/mindex/operationPlatform/c2.png')},
              {backgroundImage:require('../../../images/mindex/operationPlatform/c3.png')},
              {backgroundImage:require('../../../images/mindex/operationPlatform/c4.png')},
              {backgroundImage:require('../../../images/mindex/operationPlatform/c5.png')},
              {backgroundImage:require('../../../images/mindex/operationPlatform/c6.png')}
           ],
           product:[
            {style:{backgroundImage:'url(' + require('../../../images/mindex/operationPlatform/p1.png') + ')'},content:'强大的售后支撑'},
            {style:{backgroundImage:'url(' + require('../../../images/mindex/operationPlatform/p2.png') + ')'},content:'庞大的用户群体'},
            {style:{backgroundImage:'url(' + require('../../../images/mindex/operationPlatform/p3.png') + ')'},content:'最优秀的设备'},
            {style:{backgroundImage:'url(' + require('../../../images/mindex/operationPlatform/p4.png') + ')'},content:'安全稳定的网络服务'},
           ],
           swiper:[
              require('../../../images/mindex/operationPlatform/a1.jpg'),
              require('../../../images/mindex/operationPlatform/a2.jpg'),
              require('../../../images/mindex/operationPlatform/a3.jpg'),
              require('../../../images/mindex/operationPlatform/a4.jpg'),
              require('../../../images/mindex/operationPlatform/a5.jpg'),
              require('../../../images/mindex/operationPlatform/a6.jpg'),
              require('../../../images/mindex/operationPlatform/a7.jpg'),
           ],
           swiperOption: {
              effect: 'coverflow',
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              coverflowEffect: {
                rotate: 60,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
              }
            }
        };
      },

      methods: {
      },
      mounted() {
      },
    };
</script>
