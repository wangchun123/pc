import $ from "jquery";
function line(index){
    sessionStorage.index = index;
    var menuLi= document.querySelectorAll('.menu>li');
    for(let i=0;i<menuLi.length;i++){
        menuLi[i].classList.remove('menuLink');
    }
    menuLi[index].classList.add('menuLink');
}
export default{
    line
}