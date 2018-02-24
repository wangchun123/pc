<template>
  <div>
    <div id="container">
     <div  @mouseenter="carEnter()"  @mouseleave="carLeave()">
       <Carousel :autoplay="false" v-model="value2" loop  :radius-dot="true" >
        <CarouselItem>
            <div class="demo-carousel banner">
               <img src="../images/banner1.jpg" alt="">
            </div>
        </CarouselItem>
        <!-- <CarouselItem>
            <div class="demo-carousel banner">
                <img src="../images/banner2.jpg" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel banner">
                <img src="../images/banner3.jpg" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel banner">
                <img src="../images/banner4.jpg" alt="">
            </div>
        </CarouselItem> -->
    </Carousel>
     </div>
      <!-- 解决方案 -->
     <div class="product business" style="margin-top:6px;">
        <div class="characterItem">
          <p>解决方案</p>
           <p></p>
       </div>
       <div class="businessScene">
		        <div class="banner-container">
              <ul class="ul-width">
                <li v-for="v in bussImgs" @mouseenter="imgEnter(v)" @mouseleave="imgLeave(v)" @click="Nav(v)">
                    <div>
                        <img :src="v.src" alt="">
                      <div class="label">
                         <div class="mask" :style="{width:v.markWidth+'px'}"></div> 
                          <span>{{v.item}}</span> 
                           <Icon type="ios-arrow-right" size="30" color="#816FE6"></Icon>
                        </div>
                     </div>
                </li>
              </ul>
		        <div class="clear"></div>
		       </div>
       </div>
       
     </div>
     <!-- 产品特色 -->
     <div class="product">
       <div class="characterItem">
         <div class="Item-img"></div>
       </div>
       <div class="character" style="margin:0 auto">
        
       </div>
     </div>
     <!-- 合作伙伴 -->
     <div class="product joinWork" style="margin-top:-200px;">
        <div class="characterItem">
            <p>合作伙伴</p>
            <p></p>
         </div>
         <div class="joinWorkCarouse">
         <div class="carousel">
            <ul ref="carouselContent">
              <li v-for="v in joinWorkData" @mouseenter="borEnter(v)" :class="v.status?'liBorder':'liColor'"  @mouseleave="borLeave(v)" >
                <img :src="v.src" alt="">
                <!-- <p>{{v.item}}</p> -->
              </li>
            </ul>
         </div>
            <p class="carLeft" @click="left" > 
              <i class="left-arrow1"></i><i class="left-arrow2"></i>
            </p>
            <p class="carRight"  @click="right" ref="rightButton">
              <i class="right-arrow1"></i><i class="right-arrow2"></i>
            </p>
        </div>
     </div>

    </div>
  </div>
</template>
<script type="text/javascript">
import changeL from "../js/changeL";
import { carousel } from "../js/carousel.js";
import Citys1 from "../images/citys1.jpg"
import Citys2 from "../images/citys2.jpg"
import Industry1 from "../images/industry1.jpg"
import Industry2 from "../images/industry2.jpg"
import Farming1 from "../images/farming1.jpg"
import Farming2 from "../images/farming2.jpg"
import Automobile1 from "../images/cars1.jpg"
import Automobile2 from "../images/cars2.jpg"
import Schools1 from "../images/schools1.jpg"
import Schools2 from "../images/schools2.jpg"
import Give1 from "../images/services1.png"
import Banking1 from "../images/finances1.png"
import Healthy1 from "../images/healthy1.png"
import $ from "jquery";
    export default {
      components: {
      },
      data() {
        return {
           setting: {
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    arrow: 'none',
                    autoplay:false
                },
           witdh:document.documentElement.clientWidth ,
          value2: 0,
          PreIndex:0,
          realityWidth:370,
          ulWidthCount:0,
          appWidth:0,
          winWidth:0,
          bannerLi:0,
          bussImgs:[
            {"index":"0","id":1,"src":Citys2,"item":"完美酒店","url":"/solution/hotel","markWidth":"50","flag":false},
            /*{"index":"1","id":2, "src":Industry1,"item":"智慧消防","url":"industryNavigation","markWidth":"50","flag":false},*/
            {"index":"2","id":2, "src":Farming2,"item":"智慧城市","url":"/solution/city","markWidth":"50","flag":true},
            {"index":"3","id":2, "src":Automobile1,"item":"大型会议","url":"/solution/meeting","markWidth":"50","flag":false},
            {"index":"4","id":2,"src":Schools1,"item":"中小企业","url":"","markWidth":"50s","flag":false},
          ],
          joinWorkData:[
            {src:require("../images/caimao.png"),"status":true,"item":""},
            {src:require("../images/chuangwei.png"),"status":true,"item":""},
            {src:require("../images/fenghuo.png"),"status":true,"item":""},
            {src:require("../images/haixin.png"),"status":true,"item":""},
            {src:require("../images/hua3.png"),"status":true,"item":""},
            {src:require("../images/huawei.png"),"status":true,"item":""},
            {src:require("../images/ruijie.png"),"status":true,"item":""},
            {src:require("../images/shuxiong.png"),"status":true,"item":""},
            {src:require("../images/zhongxing.png"),"status":true,"item":""},
            {src:require("../images/haigaosi.png"),"status":true,"item":""},
            {src:require("../images/caimao.png"),"status":true,"item":""},
            {src:require("../images/chuangwei.png"),"status":true,"item":""},
            {src:require("../images/fenghuo.png"),"status":true,"item":""},
            {src:require("../images/haixin.png"),"status":true,"item":""},
            {src:require("../images/hua3.png"),"status":true,"item":""},
            {src:require("../images/huawei.png"),"status":true,"item":""},
            {src:require("../images/ruijie.png"),"status":true,"item":""},
            {src:require("../images/shuxiong.png"),"status":true,"item":""},
            {src:require("../images/zhongxing.png"),"status":true,"item":""},
            {src:require("../images/haigaosi.png"),"status":true,"item":""},
          ]
        };
      },

      methods: {
         //合作单位
        left() {
          carousel.carouselLeft(this.$refs.carouselContent,20,this.$refs.carouselContent.children[0].offsetWidth,7,0);
        },
        right() {
          carousel.carouselRight(this.$refs.carouselContent,20,this.$refs.carouselContent.children[0].offsetWidth,7,0);
        },
        borEnter(v){
         this.joinWorkData.forEach(function(element){
           element.status=true;
         })
         v.status=false;
        },
        borLeave(v){
           this.joinWorkData.forEach(function(element){
           element.status=true;
         })
        },
        // 设置业务场景的图片
        businessImg(){
            $('.banner-container ul').width(2960);  //获取所有图片的总宽度
            this.winWidth = $(".banner-container").width();
            this.bannerLi = this.winWidth - this.realityWidth;
            this.ulWidthCount = $('.banner-container li').length-1;
            this.appWidth = this.bannerLi/this.ulWidthCount; //灰色图片的宽度
            let _that = this;
            let lis=document.querySelectorAll(".ul-width>li");
             for(let i =0; i<lis.length;i++){
               lis[i].style.width=_that.appWidth+"px";
             }
                lis[2].style.width=_that.realityWidth+"px";
        },
        //业务场景的移入移出
        imgEnter(v){
          let _that=this;
            //将上一次的亮色变为灰色
          this.bussImgs.forEach(function(element){
            if(element.flag){
                element.flag=false;
               element.markWidth=50;
               element.id=2;
              _that.Imggray(element);
            }
          })
          // 将移进去的变为亮色
          v.id=1;
          v.flag=true; 
          //改变条形的长度
          v.markWidth=80;
          //改变图片的宽度  
              $(".banner-container li").eq(v.index).find("span.overlay").show();
              $(this).find("span.overlay").hide();
              $(".banner-container li").stop(true, false).animate({width: _that.appWidth},800);
             $(".banner-container li").eq(v.index).stop(true,false).animate({width: _that.realityWidth},800);
             this.Bright(v);
              
        },
        imgLeave(v){
          this.bussImgs.forEach(function(element) {
              //将亮色变为灰色
            if(element.flag){ 
               element.id=2;
               element.flag=false;       
            }
          }, this);
          //本次点击的依然是亮色
              v.id=1;
              v.flag=true;
        },
        Nav(v){
          this.$router.push({path:v.url});
        },
        carEnter(){
        this.setting.autoplay=false
        },
        carLeave(){
          this.setting.autoplay=true
        },
        Bright(v){
           if(v.src.indexOf("citys2")!=-1){
                v.src=Citys1
               }else if(v.src.indexOf("industry1")!=-1){
                  v.src=Industry2
               }else if(v.src.indexOf("farming1")!=-1){
                  v.src=Farming2
               }else if(v.src.indexOf("cars1")!=-1){
                 v.src=Automobile2
               }else if(v.src.indexOf("schools1")!=-1){
                 v.src=Schools2
               }
        },
        Imggray(element){
            if(element.src.indexOf("citys1")!=-1){
                element.src=Citys2
               }else if(element.src.indexOf("industry2")!=-1){
                  element.src=Industry1
               }else if(element.src.indexOf("farming2")!=-1){
                  element.src=Farming1
               }else if(element.src.indexOf("cars2")!=-1){
                 element.src=Automobile1
               }else if(element.src.indexOf("schools2")!=-1){
                 element.src=Schools1
               }
        }
      },
     watch: {
      // witdh(curVal,oldVal){
      //   let val = curVal-oldVal;
      //   if(Math.abs(val)>100){
      //    this.$router.push("/back")
      //   }
      // }
    },
      mounted() {
          this.businessImg();
          // window.onresize=function(){
          //   _that.witdh=document.documentElement.clientWidth 
          //   //alert(_that.witdh);
          // }
      },
    };
</script>

<style scoped>
 .Item-img{
    background: url("../images/data.jpg") center center no-repeat;
    height:572px;
    width:100%;
  }
</style>
