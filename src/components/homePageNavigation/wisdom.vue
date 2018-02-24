<template>
    <div style="position:relative">
       <div class="ban"></div>
       <div class="navigation">
            <ul>
                <li @click="move(1)">产品功能</li>
                <li @click="move(2)">平台构架</li>
                <li @click="move(3)">应用场景</li>
                <li @click="move(4)">客户案例</li>
            </ul>
       </div>
       <div style="height:100px"></div>
       <div class="top">
            <div class="line"></div>
            <span style="margin-left:20px">产品功能</span>
       </div>
       <div style="height:100px"></div>
       <div class="conent">
           <img src="../../images/51.jpg" alt="">
           <img src="../../images/52.jpg" alt="" style="float:right">
       </div>
       <div style="height:100px"></div>
       <div class="tall">
            <div class="line"></div>
            <span style="margin-left:20px">平台构架</span>
       </div>
       <div style="height:100px"></div>
       <div class="last">
           <img src="../../images/53.jpg" alt="">
       </div>
       <div style="height:100px"></div>
       <div class="use">
            <div class="line"></div>
            <span style="margin-left:20px">应用场景</span>
       </div>
       <div style="height:100px"></div>
       <div class="yifu">
           <img src="../../images/54.jpg" alt="">
       </div>
       <div style="height:100px"></div>
       <div class="kehu">
            <div class="line"></div>
            <span style="margin-left:20px">客户案例</span>
            
       </div>
       <div style="height:100px"></div>
       <div class="anwers">
           <img src="../../images/55.jpg" alt="">
       </div>
       <div style="height:100px"></div>
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
                document.documentElement.scrollTop=1400;
                document.body.scrollTop=1400;
            }else if(x==3){
                document.documentElement.scrollTop=1900;
                document.body.scrollTop=1900;
            }else if(x==4){
                document.documentElement.scrollTop=2700;
                document.body.scrollTop=2700;
            }
        }
    },
  };
</script>

<style scoped>
   .ban{
        background: url("../../images/50.jpg") center center no-repeat;
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
       width: 1300px;
       margin:0 auto;
       display: flex;
       justify-content:space-between;
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
       width: 1300px;
       margin:0 auto;
   }
   .last img{
       margin-left:60px;
   }
   .use{
       width: 1300px;
       height: 40px;
       margin: 0 auto;
   }
   .use .line,.use span{
       float: left;
   }
   .yifu{
       width: 1300px;
       height:326px;
       margin: 0 auto;
   }
   .yifu img{
      width: 100%;
   }
   .kehu{
       width: 1300px;
       height: 40px;
       margin: 0 auto;
   }
   .anwers{
       width: 1300px;
       height:456px;
       margin: 0 auto;
   }
   
   .kehu .line,.kehu span{
       float: left;
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
