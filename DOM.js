// function fn1() {
//     var rd1 = document.getElementById("rd1");
//     var rd2 = document.getElementById("rd2");


//     if (rd1.checked == true)
//         alert("This is selected:" + rd1.value);
//     else if (rd2.checked == true)
//         alert("This is selected:" + rd2.value)
//     else
//         alert("not selected");
// }
// function fn1()
// {
//     var select = document.getElementById("selectbox");
//     alert(select.options[select.selectedIndex].value)
// }

function changeStyling()
{
    // var tag = document.getElementsByTagName("p");
    var element = document.getElementsByClassName("mypara");

    for(var x =0;x<element.length;x++)
    {
        element[x].style.color = "red";
    }

}