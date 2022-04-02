var opacity = 0;
var intervelID = 0;


function fadOut()
{
    intervelID=setInterval(hide,20);    
}
function fadIn()
{
    intervelID=setInterval(show,20);    
}
function show()
{
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity<1)
    {
        opacity=opacity+0.1;
        img.style.opacity=opacity;
        console.log(opacity);
    }
    else
    {
        clearInterval(intervelID);
    }
}
function hide()
{
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity>0)
    {
        opacity=opacity-0.1;
        img.style.opacity=opacity;
        console.log(opacity);
    }
    else
    {
        clearInterval(intervelID);
    }
}