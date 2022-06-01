var Password = window.prompt("Enter the password you want to hack(numbers only): ")
let counts=setInterval(updated);
let upto=0;
function alert(){
alert("I cracked your Password! "+ upto)
}
function updated(){
        var count= document.getElementById("counter");
        count.innerHTML=++upt0
        if(upto==Password)
                {
                 document.getElementById("counter").innerHTML = upto;
                 window.setTimeout(alert, 0);
                }
}
