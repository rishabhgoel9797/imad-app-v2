console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='wow i am cool';
var element=document.getElementById('rishu');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    rishu.style.marginLeft=marginLeft+'px';
    
}

var onClick=function()
{
    var interval=setInterval(moveRight,50);
};