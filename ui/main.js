//counter end point
var button=document.getElementById('counter');
var counetr =0;
button.onclick = function()
{
    counter = counter +1;
    var span=document.getElementById('count');
    span.onclick=counter.toString();
};