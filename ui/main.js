console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='r u';
var element = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft=marginLeft + 1;
    element.style.marginLeft=marginLeft + 'px';
    
}

element.onclick=function(){
    var interval=setInterval(moveRight , 10);
};