console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='who r u';
var img=document.getElementById('rishu');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft + 'px';
    
}

img.onClick=function()
{
    var interval=setInterval(moveRight,50);
};