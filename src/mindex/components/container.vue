<template>
  <div>

    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item>
        <img src="../../images/banner1.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <p class="mtitle">解决方案</p>
    <ul class="mfloor">
      <li>
        <p>酒店客房 <Icon type="ios-arrow-right"></Icon></p>
      </li>
      <li>
        <p>智慧消防 <Icon type="ios-arrow-right"></Icon></p>
      </li>
      <li>
        <p>会议重保 <Icon type="ios-arrow-right"></Icon></p>
      </li>
      <li>
        <p>无线城市 <Icon type="ios-arrow-right"></Icon></p>
      </li>
    </ul>
    <div class="mlist">
      <div class="mlist-item">
        <span></span>
        <h2>9000万+</h2>
        <p>用户连接服务</p>
      </div>
      <div class="mlist-item">
        <span></span>
        <h2>300万+</h2>
        <p>设备接入服务</p>
      </div>
      <div class="mlist-item">
        <span></span>
        <h2>40万+</h2>
        <p>企业定制服务</p>
      </div>
    </div>
    <p class="mtitle">合作伙伴</p>
  </div>
</template>
<style>
  .mtitle{
    font-size: 18px;
    text-align: center;
    padding: 16px 0;
  }
  .mfloor li{
    height: 160px;
    background-size: cover;
    background-position: center center;
    background-repeat:no-repeat;
    position: relative;
    margin-bottom: 8px;
  }
  .mfloor li:nth-child(1){
    background-image:url('../../images/mindex/hotel.png');
  }
    .mfloor li:nth-child(2){
    background-image:url('../../images/mindex/fire.png');
  }
    .mfloor li:nth-child(3){
    background-image:url('../../images/mindex/meeting.png');
  }
    .mfloor li:nth-child(4){
    background-image:url('../../images/mindex/city.png');
  }
  .mfloor li p{
    font-size: 18px;
    position: absolute;
    right: 22px;
    top: 18px;
    color: white;
  }
  .mlist{
    display: flex;
    justify-content:center;
    padding:20px .6rem;
    background: #f2f2f2;
  }
  .mlist>div{
    flex:1;
    text-align: center;
  }
  .mlist-item span{
    display: block;
    margin:0 auto;
    height: 40px;
    width: 40px;
    background-size: contain;
    background-position: center center;
    background-repeat:no-repeat;
  }
  .mlist-item:nth-child(1) span{
    background-image:url('../../images/mindex/usr.png');
  }
  .mlist-item:nth-child(2) span{
    background-image:url('../../images/mindex/int.png');
  }
  .mlist-item:nth-child(3) span{
    background-image:url('../../images/mindex/cloud.png');
  }
  .mlist-item p{
    color: #888;
  }
</style>
<script type="text/javascript">
    export default {
      components: {
      },
      data() {
        return {
          }
      },
      methods: {
        
      },
      mounted() {
         
      },
    };
</script>
