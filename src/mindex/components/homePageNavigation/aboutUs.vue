<template>
  <div class="ralationUs us1">
    <div class="aboutUs-img"></div>
   <!-- 中间的内容部分 -->
   <div class="all">
      <div class="jion">
          <h1 style="background:#ffffff;">公司简介</h1>
          <div class="bottom" style="background:#ffffff;"> 
            <!-- <div class="left">
              <img src="../../images/about2.jpg" alt="">
            </div>
            <div class="right">
            <ul>
              <li>爱WiFi是中国电信面向政企客户提供整体WiFi解决方案的品牌，方便各类政企客户向其用户提供安全、稳定、高速、有保障的WiFi上网服务。业务已经过多次国际性重大会议的锤炼，如G20峰会、连续三届世界互联网大会、五国金砖会议等，同时积极探索基于爱WiFi的个性化场景服务及大数据深度应用。</li>
              <li style="text-indent:32px">2014年9月，中国电信集团成立全国爱WiFi业务运营中心，中心设立在浙江杭州。在中国电信浙江分公司的指导下，浙江省公众信息产业有限公司无线运营分公司为WiFi运营中心提供技术支撑服务。</li>
              <li> 中心目前现有成熟完善的大型场所WiFi覆盖解决方案，如无线城市；也为满足各类客户需求，提供企业、商场、超市、酒店、商铺、园区等各种中小型场所的WiFi覆盖解决方案；并以开放心态向社会厂商提供有利于提升客户感知的各种合作，共同为用户打造优质服务。</li>
            </ul>
            </div> -->
            <div style="height:40px;"></div>
            <div class="item">
              <img src="../../images/about5.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="comeUs">
            <h1 style="margin-top:98px;">加入我们</h1>
            <div class="conent">
              <div class="left">
                <ul class="jion-us" @click="left">
                      <li>
                        <router-link to="/aboutUs">we前端开发主管</router-link>
                      </li>
                      <li>
                        <router-link to="/net">网络工程师</router-link>
                      </li>
                      <li>
                        <router-link to="/move">运维开发工程师</router-link>
                      </li>
                      <li>
                        <router-link to="/bigData">大数据开发工程师</router-link>
                      </li>
                      <li>
                        <router-link to="/itDesign">it支持工程师</router-link>
                      </li>
                      <li>
                        <router-link to="/dbaData">dba数据库管理员</router-link>
                      </li>
                      <li>
                         <router-link to="/javaDesign">高级java开发工程师</router-link>
                      </li>
                      <li>
                        <router-link to="/workMan">业务支撑工程师</router-link>
                      </li>
                      <li>
                        <router-link to="/workManage">业务管理(ERP项目)</router-link>
                      </li>
                      <li>
                        <router-link to="/destManage">项目管理工程师</router-link>
                      </li>
                    </ul>  
              </div>
              <div class="right">
                 <div style="margin-left:50px;"><router-view></router-view></div>
              </div>
            </div>
        </div>
        <div class="compoent" style="margin-top:96px;">
          <div style="width:100%;height:96px;margin-top:30px;"></div>
          <h1>公司期刊</h1>
          <div class="conent">
            <img src="../../images/book1.png" alt="" style="margin-left:-45px">
            <img src="../../images/book2.png" alt="">
            <img src="../../images/book3.png" alt="">
            <img src="../../images/book4.png" alt="" style="margin-right:-50px">
          </div>
        </div>
        <ul class="bottom-time">
          <li>2017-10 &nbsp;第11期</li>
          <li style="margin-left:130px">2017-12 &nbsp;第12期</li>
          <li style="margin-left:130px">2017-12 &nbsp;第13期</li>
          <li style="margin-left:130px">2018-02 &nbsp;第14期</li>
        </ul>
   </div>
  <div style="height:150px;width:100%"></div>
  </div>
</template>
<style>
</style>

<script>
import bottomFooter from "../bottomFooter.vue";
  export default{
    components: {
      bottomFooter: bottomFooter
    },
    methods:{
      left(e){
        e.stopPropagation();
       let allDom=document.getElementsByClassName("jion-us");
       Array.from(allDom[0].children).map((item,index)=>{
         item.className="";
       })
       Array.from(allDom[0].children).map((item,index)=>{
            if(e.target.parentNode==item){
              e.target.parentNode.className="background";
            }else{
            
              e.target.className="background";
            }
       })
      
       
      }
      
    },
    mounted(){
    
    }
  }
</script>

<style scoped>
a{
  color: #495060;
}
a:hover{
  color:#00a1fe;
}
  li.background{
    background:#00a1fe;
  }
  .background a{
    color:white;
  }
  .all{
    width:1300px;
    margin: 0 auto;
    background: #f8f8f8;
    height:2000px;
  }
 .aboutUs-img{
    background: url("../../images/aboutUs.jpg") center center no-repeat;
    height:572px;
    width:100%;
  }
  .item{
    /* background: url("../../images/about5.jpg") center center no-repeat; */
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding:6px;
  }
  .item img{
    width: 96%;
    height: 96%;
  }
 h1{
   text-align: center;
   font-size:30px;
   font-weight: bold;
 }
 .jion{
   margin-top:90px;
   height:603px;
 }
 .jion .left{ 
   height: 512px;
   width: 430px;
 }
 .jion .right{
   height: 512px;
   width:570px;
   padding:0 26px;
 }
 .jion .left,.jion .right{
   float: left;
   margin-top: 60px;
 }
 .right ul{
   margin-left: 48px;
 }
 .right ul li{
   line-height:32px;
 }
 .right ul li:first-child{
   text-indent:32px;
 }
 .right ul li:last-child{
   text-indent:32px;
 }
.comeUs{
    height:700px;
}
.conent{
  height:780px;
  margin-top: 60px;
}
.conent .left{
  width:215px;
  height:780px;
}
.conent .left li{
  margin-top: 2px;
  width: 215px;
  height:60px;
 text-align: center;
 line-height: 60px;
 cursor: pointer;
}
.conent .right{
  width: 770px;
  height:780px;
}
.conent .left,.conent .right{
  float:left;
}
.compoent{
  background: #ffffff;
}
.compoent .conent{
  display: flex;
  justify-content:space-around;
  height: 314px;
  width: 100%;
}
.bottom-time{
  height: 20px;
  width: 100%;
  display: flex;
  color: #878787;
  font-size: 14px;
  margin-top: 24px;
}
.bottom-time  li{
  width: 228px;
  float: left;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
.bottom-time li:hover{
  color: #2d8cf0;
}
 .jion-us{
   background: white;
 }
</style>
