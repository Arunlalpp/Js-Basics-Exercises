var ID = 0;
var seconds = 0;
function PrintMessage()
{
    document.getElementById("op").innerHTML = seconds+" seconds";
    seconds++
}
function start()
{
   ID = window.setInterval(PrintMessage,5000);
}

function stop()
{
    window.clearInterval(ID);
}