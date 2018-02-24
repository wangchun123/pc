<template>
    <div>
       <div class="ban"></div>
       <div class="navigation">
            <ul>
                <li @click="move(1)">平台概述</li>
                <li @click="move(2)">功能介绍</li>
            </ul>
        </div>
        <div style="height:100px"></div>
       <div class="top">
            <div class="line"></div>
            <span style="margin-left:20px">平台概述</span>
       </div>
       <div style="height:100px"></div>
       <div class="conent">
           <img src="../../images/open2.jpg" alt="">
           <img src="../../images/open3.jpg" alt="">
           <img src="../../images/open4.jpg" alt="">
       </div>
       <div style="height:100px"></div>
       <div style="background:#F8F8F8">
            <div style="height:33px"></div>
            <div class="tall">
                    <div class="line"></div>
                    <span style="margin-left:20px">功能介绍</span>
               </div>
            <div style="height:100px"></div>
       </div>
       <div style="width:100%;background:#F8F8F8">
            <div class="last">
                    <!-- <img src="../../images/open5.jpg" alt=""> -->
            </div>
       </div>
    </div> 
</template>

<script>
export default {
    components: {},
    data() {
      return {}
    },
    methods: {
        move(x){
            if(x==1){
                document.documentElement.scrollTop=600;
                document.body.scrollTop=600;
            }else if(x==2){
                document.documentElement.scrollTop=1500;
                document.body.scrollTop=1500;
            }
        }
    },
  };
</script>

<style scoped>
   .ban{
        background: url("../../images/open1.jpg") center center no-repeat;
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
   .top{
       width: 1300px;
       height: 40px;
       margin: 0 auto;
   }
   .top .line,.top span{
       float: left;
   }
   .conent{
       display: flex;
       justify-content:space-between;
      width: 1300px;
      margin: 0 auto;
   }
   .conent img{
       width:22%;
       height:22%;
   }
   .tall{
       width: 1300px;
       height: 40px;
       margin: 0 auto;
   }
   .tall .line,.tall span{
       float: left;
   }
   .last{
        background: url("../../images/open5.jpg") center center no-repeat;
       width: 1300px;
        height:1200px;
       margin: 0 auto;
   }
   .navigation{
    margin: 0 auto;
    height:16px;
    width: 1300px;
    cursor: pointer;
   }
   .navigation ul li:hover{
       color: #1196FD;
   }
   .navigation ul{
       position: absolute;
       top:585px;
       display: flex;
       justify-content:space-around;
       width: 1300px; 
       font-size:20px;
   }
</style>
