var Password = window.prompt("Enter the password you want to hack(numbers only): ");
let upto=0;
 var count= document.getElementById("counter");
while (upto!=Password) {
        count.innerHTML=++upto;
        if (upto==Password)
        {
         count.innerHTML = upto;
                alert("I cracked your Password! "+ upto);
                window.stop()
        }
}
