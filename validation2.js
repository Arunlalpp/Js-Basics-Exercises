function validate()
{
    var uname = document.getElementById("uname").value;
    var regx = /[a-x]00/;
    if(regx.test(username))
    {
        alert("Valid username");
        document.getElementById("lbluser").style.visibility = "hidden";
    }
    else 
    {
        // alert("Invalid username");
        document.getElementById("lbluser").style.visibility = "visible";
    }

}