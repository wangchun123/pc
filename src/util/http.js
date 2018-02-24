/**
 * Created by songbo on 2017/8/9.
 */
//import 'whatwg-fetch'
import axios from 'axios'
import notice from './notice'
let token = sessionStorage.token
//第一个是axios登录方式注释部分为fetch登录部分，相处理响应值可以看promise
//登录认证不适用 axios
function get(url, config={_that:null,_key:null}) {
    let {_that, _key} = config;
    var promise = new Promise(function (resolve,reject) {
        axios({
            url: url,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((json)=> {
            resolve(json)
            if(_key){
                _that.setState({
                    [_key]: json.data
                })
            }

        }).catch(function (error) {
            console.log('Request failed', error);
        });
    })
    return promise
}
function post(url=null,config={data:null,_that:null,_key:null}) {
    let{data,_that,_key}=config;
    data.token=sessionStorage.token||'';
    var promise = new Promise(function (resolve,reject) {
        axios.post( url,JSON.stringify(data),{
            method:'POST',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
        }).then((json)=> {
            if(json.data.success===false){
                notice("error",{title:"请求错误",description:json.data.message+json.data.messageCode})
            }else{
                resolve(json)
                if(_key){
                    _that.setState({
                        _key: json.data
                    })
                }
            }
        }).catch(function (error) {

            console.log('Request failed', error);

        });
    })
    return promise
}
//fetch
/*function get(url, config={_that:null,_key:null}) {
    let {_that, _key} = config;
    var promise = new Promise(function (resolve,reject) {
        fetch(url,{
            method:'get',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':token
            }
        }).then(
            function (res) {
                if(res.ok){
                    return res.json()
                }
            }
        ).then((json)=> {
            resolve(json)
            if(_key){
                _that.setState({
                  [_key]: json
                })
            }

        }).catch(function (error) {

            console.log('Request failed', error);

        });
    })
    return promise
}*/
/*function post(url=null,config={data:null,_that:null,_key:null}) {
    let{data,_that,_key}=config;
    var promise = new Promise(function (resolve,reject) {
    fetch(url,{
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    }).then(
        function (res) {
            if(res.ok){
                return res.json()
            }
        }
    ).then((json)=> {
        if(!(json.code=="0")){
            notice("error",{title:"请求错误",description:json.msg+json.code})
        }else{
            resolve(json)
            if(_key){
                _that.setState({
                    _key: json
                })
            }
        }
    }).catch(function (error) {

        console.log('Request failed', error);

    });
    })
    return promise
}*/
export default  {
    get,
    post
}