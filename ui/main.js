console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='wow i am cool';
var element=document.getElementById('rishu');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    element.style.marginLeft=marginLeft + 'px';
    
}

element.onClick=function()
{
    var interval=setInterval(moveRight,50);
};