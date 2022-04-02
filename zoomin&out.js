var width = 100;
var difference = 2;
var intervelID =0;
// document.getElementById("img1").style.width=width;
function increase()
{
    intervelID=setInterval(zoomIn,20);
}
function decrease()
{
    intervelID=setInterval(shrink,20);
}
function expand()
{
    if(width<200)
    {
        width= width+difference;
        document.getElementById("img1").style.width=width;
        console.log(width);
    }
    else
    {
        clearInterval(intervelID);
    }
}
function shrink()
{
    if(width<100)
    {
        width= width-difference;
        document.getElementById("img1").style.width=width;
        console.log(width);
    }
    else
    {
        clearInterval(intervelID);
    }
}