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
