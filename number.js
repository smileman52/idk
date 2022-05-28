var Password = window.prompt("Enter the password you want to hack(numbers only): ")
        let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto
          if(counts=Password)
          {
          alert("I cracked you Password! Its "+upto)
              window.stop()
          }
          }
