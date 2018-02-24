// 轮播图
import {Tween} from "../js/tween.js"
var carousel={
    leftFlag:true,
    t:0,
    b:0,
    c:0,
    d:40,
    index:0,
    timer:'',
     //  参数：最外层的标签  图片间距 一张图片的宽度 显示图片的张数,想左的偏移量
    carouselLeft:function(lable,space,imgWidth,page,left){
        if(this.leftFlag){
           this.leftFlag=false;
            clearInterval(this.timer);      
              this.c=imgWidth+space;
              this.b=lable.offsetLeft;
            if(this.index==0){
              this.index=page; 
              this.b=-(this.c* this.index+left); 
            }
            this.index--;
          this.timer=setInterval(()=>{   
               this.t++;           
               lable.style.left=Tween.Quad.easeIn(this.t,this.b,this.c,this.d)+'px';
               if(this.t==this.d){
                 this.t=0;
                  this.leftFlag=true;
                  clearInterval(this.timer);
               }
          },10);
    }
    },
    carouselRight:function(lable,space,imgWidth,page,left){
        if (this.leftFlag) {
            this.leftFlag = false;
            clearInterval(this.timer);
            this.index++;
            this.c = imgWidth + space;
            this.b = lable.offsetLeft;
            if (this.index == page) {
              this.index = 0;
              this.b = -left;
            }
            this.timer = setInterval(() => {
              this.t++;
              lable.style.left =
                Tween.Quad.easeIn(this.t, this.b, -this.c, this.d) + "px";
              if (this.t == this.d) {
                this.t = 0;
                clearInterval(this.timer);
                this.leftFlag = true;
              }
            }, 10);
          }
    }

}
  
export {carousel}