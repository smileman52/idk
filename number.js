var Password = window.prompt("Enter the password you want to hack(numbers only): ");
let upto=0;
while (upto=!Password) {
        var count= document.getElementById("counter");
        count.innerHTML=++upto;
        if upto==Password
        {
         document.getElementById("counter").innerHTML = upto;
                alert("I cracked your Password! "+ upto);
                window.stop()
        }
}
