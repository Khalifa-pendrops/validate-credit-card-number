## Title of Program

Validating Credit Card Number (RegEx)

---

# Description

This program validates a credit card number of different types of credit cards. The program is implemented on the CL where users are propmted to enter the credit card number or press "0" to exit the program. The program first checks to see if the number entered matches the different implemented card types (Verve, Visa and Mastercard - other types could be implemented) via number of digits, as well as first, first two or first four digits (as applicable). if this check passes, the program validates the number via Luhn algorithm. This algorithm validates credit card numbers by first looping through the number entered, multiplies every consecutive second digit starting from the right to the left hand side by 12. If any of the resulting numbers from the multiple is greater than 9, then 9 is subtracted from that number. Atotal sum of all the numbers is made and if the total is a multiple of 10, then the number is a valid credit card number, else it returns invalid. Below is a code exampple of Luhn algorithm from the program:

```bash

const validateWithLuhn = (cardNumber) => {
  const digits = cardNumber.split("").map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] = digits[i] * 2 > 9 ? digits[i] * 2 - 9 : digits[i] * 2;
  }

  const sumDigits = digits.reduce((sum, digit) => sum + digit, 0);
  return sumDigits % 10 === 0;
};

```

---

# RegEx Patterns Used

- ^ 'n - starts the string
- $ 'n - ends the string
- . 'n - matches any character
- \d 'n - matches any digit
- \s 'n - matches any whitespace 
- a|b 'n - matches a or b
- [0-9] 'n - matches any digit
- {n} 'n - matches n occurences

---

# How to run

- fork the repo 
- navigate to the file directory
- on the terminal, run this command:

```bash

node card.js

```

---





