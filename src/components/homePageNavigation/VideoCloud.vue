<template>
    <div  style="position:relative">
       <div class="ban"></div>
       <div class="navigation">
        <ul>
            <li @click="move(1)">功能介绍</li>
            <li @click="move(2)">产品优势</li>
            <li @click="move(3)">应用场景</li>
        </ul>
    </div>
       <div style="height:100px"></div>
       <div class="top">
            <div class="line"></div>
            <span style="margin-left:20px">功能介绍</span>
       </div>
       <div style="height:100px"></div>
       <div class="conent">
           <img src="../../images/91.jpg" alt="">
           <img src="../../images/92.jpg" alt="" style="float:right">
       </div>
       <div style="height:100px"></div>
       <div class="tall">
            <div class="line"></div>
            <span style="margin-left:20px">产品优势</span>
       </div>
       <div style="height:100px"></div>
       <div style="background:#F8F8F8">
            <div class="last">
                    <img src="../../images/93.jpg" alt="">
                    <img src="../../images/94.jpg" alt="">
                    <img src="../../images/95.jpg" alt="">
            </div>
       </div>
     
       <div style="height:100px"></div>
       <div class="use">
            <div class="line"></div>
            <span style="margin-left:20px">应用场景</span>
       </div>
       <div style="height:80px"></div>
       <div class="yifu">
           <img src="../../images/96.jpg" alt="">
           <img src="../../images/97.jpg" alt="" style="margin-left:100px;">
       </div>
       <div style="height:100px"></div>
    </div> 
</template>

<script>
export default {
    components: {},
    data() {
     
    },
    methods: {
        move(x){
            if(x==1){
                document.documentElement.scrollTop=570;
                document.body.scrollTop=570;
            }else if(x==2){
                document.documentElement.scrollTop=1350;
                document.body.scrollTop=1350;
            }else if(x==3){
                document.documentElement.scrollTop=2150;
                document.body.scrollTop=2150;
            }
        }
    },
  };
</script>

<style scoped>
   .ban{
        background: url("../../images/90.jpg") center center no-repeat;
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
       justify-content: space-between;
       width: 1300px;
       margin:0 auto;
   }
   .tall{
       width: 1300px;
       height: 40px;
       margin: 0 auto;
       margin-top: 50px;
   }
   .tall .line,.tall span{
       float: left;
   }
   .last{
       width: 1300px;
       margin:0 auto;
       display: flex;
        justify-content: space-between;
   }
   .last img{
        width: 20%;
        height: 20%;
   }
   .use{
       width: 1300px;
       margin: 0 auto;
   }
   .use .line,.use span{
       float: left;
   }
   .yifu{
       width: 1300px;
       height: 450px;
       margin: 0 auto;
       margin-top: 50px;
       display: flex;
       justify-content: space-between;
   }
   .yifu img{
       width: 500px;
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
       top:520px;
       display: flex;
       justify-content:space-between;
       width: 1300px; 
       font-size:16px;
   }
</style>
