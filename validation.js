function validate()
{
    var uname = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(uname.value.trim()=="")
    {
        alert("blank usernbame");
        uname.style.border = "solid  3px red";
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("blank password");
        return false;
    }
    if(password.value.trim().length<5)
    {
        alert("password too short");
        return false;
    }
    else
    {
        return true;
    }
}