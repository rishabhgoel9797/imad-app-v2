//counter end point
var button=document.getElementById('counter');
var counter =0;
button.onclick = function()
{
    var request = XMLHTTPRequest();
    request.onreadystatechange=function()
    {if(request.readyState==XMLHTTPReques.DONE)
    {
        if(request.status==200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
    span.innerHTML=counter.toString();
        }
    }
    };
    
    request.open('GET', 'http://rishabhgoel9797.imad.hasura-app.io/',true);
    request.send(null);
    
};