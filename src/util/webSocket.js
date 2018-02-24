/**
 * Created by Administrator on 2017/9/18.
 */
import notice from './notice'
export default function webSocket(url) {
    if (window.WebSocket) {
        console.log('This browser supports WebSocket');
        this.openSocet(url);
    } else {
        console.log('This browser does not supports WebSocket');
    }
}
function openSocet (url='ws://'+window.location.host+'/sendMessage'){
        var self = this
        try {
            //如果webSocket服务不是在本地，本地开发的时候要写绝对地址如下
            //let url = 'ws://192.168.212.178:8080/sendMessage'
            //如果webSocket与web项目在同一个ip端口下写如下地址
            //let url = 'ws://'+window.location.host+'/sendMessage'
            var socket = new WebSocket(url);
           // 打开Socket链接
            socket.onopen = function (event) {
                console.log('建立连接成功================')
                // 发送一个初始化消息
                socket.send('I am the client and I\'m listening!');
                //接受消息
                socket.onmessage = function (event) {
                    console.log("接收到消息", event.data)
                };
                socket.onerror = function (evt) {
                    console.log("发送错误" + evt)
                    notice("error",{title:"webSocket报错",description:evt})
                };
                // 监听Socket的关闭
                socket.onclose = function (event) {
                    console.log('Client notified socket has closed', event);
                };
                // 关闭Socket....
                //socket.close()
            };
            window.onbeforeunload = function () {
                //注意关闭webscoket链接否则会内存溢出，游览器挂掉
                socket.close();
            }
        } catch (e) {
        }
}


