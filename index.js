var Digits = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let Guess = 0;
let Password = name;
let GuessesMade = 0;
let MaximumGuesses = 2176782336;
let Letter1 = 0;
let Letter2 = 0;
let Letter3 = 0;
let Letter4 = 0;
let Letter5 = 0;
let Letter6 = 0;
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
  Guess = Digits.join(Letter1 + Letter2 + Letter3 + Letter4 + Letter5 + Letter6);
  GuessesMade += 1;
  MaximumGuesses -= 1;
}
document.getElementById("done").innerHTML = Done! Your Password is " + Guess + ". This took " + GuessesMade + " tries.", 0, 0;
