var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var Guess = 0;
var Password = 0;
var Letter1 = 0;
var Letter2 = 0;
var Letter3 = 0;
var Letter4 = 0;
var Letter5 = 0;
var Letter6 = 0;
var name = window.prompt("Enter your name: "); 
alert("Your name is " + name); 
text("Cracking...", 0, 0);
while (Guess.includes(Password)) {
  Letter6 += 1;
  if (Letter6 > 36) {
    Letter5 += 1;
    Letter6 = 1;
  }
  if (Letter5 > 36) {
    Letter4 += 1;
    Letter5 = 1;
  }
  if (Letter4 > 36) {
    Letter3 += 1;
    Letter4 = 1;
  }
  if (Letter3 > 36) {
    Letter2 += 1;
    Letter3 = 1;
  }
  if (Letter2 > 36) {
    Letter1 += 1;
    Letter2 = 1;
  }
}
