console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='r u';
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft=marginLeft + 5;
    img.style.marginLeft=marginLeft + 'px';
    
}

img.onClick=function(){
    var interval=setInterval(moveRight , 100);
};