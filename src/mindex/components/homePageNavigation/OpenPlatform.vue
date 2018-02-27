<template>
    <div>
      <mt-swipe :show-indicators="false" :auto="0">
        <mt-swipe-item v-for='(items,i) in banner' :style="items"></mt-swipe-item>
      </mt-swipe>
      <div class="mfloor">
        <div class="title">平台概述</div>
        <div class="item" v-for="(items,i) in list">
          <img :src="items.backgroundImage" alt="">
          <div class="chapter">
            <div class="title">{{items.title}}</div>
            <p v-for='(item,z) in items.content'>{{item}}</p>
          </div>
        </div>
      </div>
      <div class="mfloor">
        <div class="title">功能介绍</div>
        <div class="subtitle">认证</div>
        <Menu width='auto'>
            <Submenu name="1">
                <template slot="title">
                    爱WiFi认证
                </template>
                <MenuItem name="1-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    创新WiFi漫游
                </template>
                <MenuItem name="2-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    整合社会热点
                </template>
                <MenuItem name="3-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
        </Menu>

        <div class="subtitle">数据采集</div>
        <Menu width='auto'>
            <Submenu name="1">
                <template slot="title">
                    用户数据采集
                </template>
                <MenuItem name="1-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    设备数据采集
                </template>
                <MenuItem name="2-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
        </Menu>

        <div class="subtitle">PUSH</div>
        <Menu width='auto'>
            <Submenu name="1">
                <template slot="title">
                    PUSH
                </template>
                <MenuItem name="1-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    应用推送
                </template>
                <MenuItem name="2-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    数据分析
                </template>
                <MenuItem name="3-1">
                  用户安装集成爱WiFi SDK应用，连接爱WiFi网络，
即可免portal自动认证上网，并满足公安溯源要求。
                </MenuItem>
            </Submenu>
        </Menu>
      </div>
    </div> 
</template>

<script>
export default {
    components: {},
    data() {
      return {
        banner:[{backgroundImage:'url(' + require('../../../images/mindex/openPlatform/banner.jpg') + ')'}],
        list:[
            {backgroundImage:require('../../../images/mindex/OpenPlatform/j1.png'),title:'认证接入',content:['支持多种安全认证方式，包括手机号码认证、微信认证等，通过认证获取客户资料等信息。']},
            {backgroundImage:require('../../../images/mindex/OpenPlatform/j2.png'),title:'数据采集',content:['提供更丰富的用户数据画像，包括异网用户；','QoS数据采集，提供主动报障能力，提高爱WiFi网络服务质量；','推送基于大数据分析结果的个性化应用。']},
            {backgroundImage:require('../../../images/mindex/OpenPlatform/j3.png'),title:'PUSH',content:['提高电信终端用户黏性，拓展用户维系渠道；','建立针对异网用户营销渠道。']}
           ],
      }
    },
    methods: {
        
    },
  };
</script>
