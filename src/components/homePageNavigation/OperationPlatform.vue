<template>
    <div style="position:relative;overflow:hidden">
        <div class="banner"></div>
        <div class="top">
            <div class="font">
                <ul>
                    <li @click="move(1)">产品功能</li>
                    <li @click="move(2)">产品优势</li>
                    <li @click="move(3)">应用场景</li>
                    <li @click="move(4)">客户案例</li>
                    <li @click="move(5)">帮助文档</li>
                </ul> 
            </div>
            <div class="product">
                   <div class="top" style="height:100px;width:100%;">
                        <div class="line" style="margin-left:0px;"></div>
                        <span style="margin-left:20px">产品功能</span>
                    </div>
                    <img src="../../images/add1.jpg" alt="">  
            </div>
        </div>
        <div style="width:100%;background:#F8F8F8;height:30px"></div>
        <div style="width:100%;background: #F8F8F8;">
            <div class="great">
                    <div class="line"></div>
                    <span style="margin-left:20px">产品优势</span>
                    <div style="height:100px"></div>
                    <div class="cover">
                        <img src="../../images/01.jpg" alt="">
                        <img src="../../images/02.jpg" alt="">
                        <img src="../../images/03.jpg" alt="">
                        <img src="../../images/04.jpg" alt="">       
                    </div>
                </div>
        </div>
        <div style="width:100%;background:#F8F8F8;height:35px"></div>
        <div style="height:100px;"></div>
        <div class="scene" style="margin:0 auto">
                <div style="height:100px;width:1300px;margin:0 auto;">
                        <div class="line"></div>
                        <span style="margin-left:20px">应用场景</span>
                </div>
                <div class="businessScene">
                        <div class="banner-container" style="width:1500px">
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
            <div style="height:100px;"></div>
            <div class="bottom">
                    <div class="line"></div>
                    <span style="margin-left:20px">客户案例</span>
                    <div style="height:100px;"></div> 
                    <img src="../../images/20.jpg" alt="">
                    <img src="../../images/21.jpg" alt="">
                    <img src="../../images/22.jpg" alt="">
                    <img src="../../images/23.jpg" alt="">
                    <img src="../../images/24.jpg" alt="">
                    <img src="../../images/26.jpg" alt="">
                   
            </div>
            <div style="height:500px;"></div> 
            <div class="last" style="height:100px;clear:both;width:1300px;margin:0 auto">
                    <div class="line"></div>
                    <span style="margin-left:20px">帮助文档</span>
            </div> 
            <div style="height:100px;clear:both;width:1300px;margin:0 auto;text-decoration:underline;"><a href="" download="../../world/爱WiFi业务FAQ.pdf" style="margin-left:30px">爱WIFI业务FAQ</a></div>
            <div style="height:40px;"></div>
    </div>
</template>

<script>
import Citys1 from "../../images/w1.jpg"
import Citys2 from "../../images/c1.jpg"
import Industry1 from "../../images/w2.jpg"
import Industry2 from "../../images/c2.jpg"
import Farming1 from "../../images/w3.jpg"
import Farming2 from "../../images/c3.jpg"
import Automobile1 from "../../images/w4.jpg"
import Automobile2 from "../../images/c4.jpg"
import Schools1 from "../../images/w5.jpg"
import Schools2 from "../../images/c5.jpg"
import Conference1 from "../../images/w6.jpg"
import Conference2 from "../../images/c6.jpg"
import street1 from "../../images/w7.jpg"
import street2 from "../../images/c7.jpg"
import LargeShop1 from "../../images/w8.jpg"
import LargeShop2 from "../../images/c8.jpg"

export default {
      components: {
      },
      data() {
        return {
           witdh:document.documentElement.clientWidth,
          value2: 0,
          PreIndex:0,
          realityWidth:370,
          ulWidthCount:0,
          appWidth:0,
          winWidth:0,
          bannerLi:0,
          bussImgs:[
            {"index":"0","id":1,"src":Citys2,"item":"企业办公","url":"cityNavigation","markWidth":"50","flag":false},
            {"index":"1","id":2, "src":Industry2,"item":"企业访客","url":"industryNavigation","markWidth":"50","flag":false},
            {"index":"2","id":2, "src":Farming2,"item":"酒店客房","url":"farmNavigation","markWidth":"50","flag":false},
            {"index":"3","id":2, "src":Automobile2,"item":"园区收费","url":"carsNavigation","markWidth":"50","flag":false},
            {"index":"4","id":2,"src":Schools2,"item":"公共场所","url":"schoolNavigation","markWidth":"50s","flag":false},
            {"index":"5","id":2,"src":Conference1,"item":"会议重保","url":"schoolNavigation","markWidth":"50s","flag":true},
            {"index":"6","id":2,"src":street2,"item":"沿街商铺","url":"schoolNavigation","markWidth":"50s","flag":false},
            {"index":"7","id":2,"src":LargeShop2,"item":"大型商铺","url":"schoolNavigation","markWidth":"50s","flag":false},
          ],
         
        };
      },

      methods: {
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
                lis[5].style.width=_that.realityWidth+"px";
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
        Bright(v){
           if(v.src.indexOf("c1")!=-1){
                v.src=Citys1
               }else if(v.src.indexOf("c2")!=-1){
                  v.src=Industry1
               }else if(v.src.indexOf("c3")!=-1){
                  v.src=Farming1
               }else if(v.src.indexOf("c4")!=-1){
                 v.src=Automobile1
               }else if(v.src.indexOf("c5")!=-1){
                 v.src=Schools1
               }else if(v.src.indexOf("c6")!=-1){
                 v.src=Conference1
               }else if(v.src.indexOf("c7")!=-1){
                 v.src=street1
               }else if(v.src.indexOf("c8")!=-1){
                 v.src=LargeShop1
               }
        },
        Imggray(element){
            if(element.src.indexOf("w1")!=-1){
                element.src=Citys2
               }else if(element.src.indexOf("w2")!=-1){
                  element.src=Industry2
               }else if(element.src.indexOf("w3")!=-1){
                  element.src=Farming2
               }else if(element.src.indexOf("w4")!=-1){
                 element.src=Automobile2
               }else if(element.src.indexOf("w5")!=-1){
                 element.src=Schools2
               }else if(element.src.indexOf("w6")!=-1){
                 element.src=Conference2
               }else if(element.src.indexOf("w7")!=-1){
                 element.src=street2
               }else if(element.src.indexOf("w8")!=-1){
                 element.src=LargeShop2
               }
        },
        move(x){
            if(x==1){
                document.documentElement.scrollTop=600;
                document.body.scrollTop=600;
            }else if(x==2){
                document.documentElement.scrollTop=1400;
                document.body.scrollTop=1400;
            }else if(x==3){
                document.documentElement.scrollTop=1900;
                document.body.scrollTop=1900;
            }else if(x==4){
                document.documentElement.scrollTop=2650;
                document.body.scrollTop=2650;
            }else if(x==5){
                document.documentElement.scrollTop=3000;
                document.body.scrollTop=3000;
            }
            
        }
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
    .top{
        margin: 0 auto;
        width: 1300px;
    }
    .bottom{
        margin: 0 auto;
        width: 1300px;
    }
   .banner{
        background: url("../../images/moveBan.jpg") center center no-repeat;
        height:572px;
        width: 100%;
   }
   .line{
       width: 6px;
       height: 30px;
       background:#1196fd;
   }
   span{
        font-size: 24px;
    }
    .font ul{
        display: flex;
        justify-content:space-between;
        position: absolute;
        top:518px;
        z-index:100;
        width: 1300px;
        margin: 0 auto;
       cursor: pointer;
       font-size:20px;
    }
    .font li:hover{
        color: #1196FD;
    }
    .font ul li{
       width: 100px;
       height: 30px;
       }
    .product{
        height:800px;
        width: 100%;
        background: white;
        margin-top:10px;
    }
    .product img{
        width: 100%;
    }
    .product .line{margin-left:50px;}
    .product .line,.product span{
        float: left;
    }
    .great{
        background: #F8F8F8;
        width: 1300px;
        margin: 0 auto; 
    }
    .great img{
        width:220px;
    }
    .great .line,.great span{
        float: left;
    }
    .cover{
        display: flex;
        justify-content: space-between;
    }
    .cover img{
        margin-left:30px;
        width: 15%;
        height: 15%;
    }
    .scene .line,.scene span{
        float: left;
    }
    .bottom .line,.bottom span{
        float: left;
    }
    .bottom img{
        float: left;
        width: 410px;
        margin-left: 20px;
        margin-top: 20px
    }
    .last .line,.last span{
        float: left;
    }
 </style>
