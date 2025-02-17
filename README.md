## Title of Program

Validating Credit Card Number (RegEx)

---

# Description

This program validates credit card numbers for various types of credit cards. It is implemented on the command line (CL), where users are prompted to enter a credit card number or press "0" to exit the program. The program first checks whether the entered number matches the criteria for the supported card types (Verve, Visa, and Mastercard – additional card types can be implemented). This is done by verifying the number of digits, as well as the first, first two, or first four digits, as applicable. If this initial check is successful, the program proceeds to validate the number using the Luhn algorithm.

The Luhn algorithm validates credit card numbers by iterating through the entered number. It multiplies every second digit, starting from the right and moving to the left, by 2. If any of the resulting products is greater than 9, 9 is subtracted from that number. The program then calculates the total sum of all the digits. If the total sum is a multiple of 10, the credit card number is considered valid; otherwise, it is deemed invalid. Below is a code example of the Luhn algorithm as implemented in the program:

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

## Expected Ouput
Output should look like this for valid and invalid numbers:

```
chike@KhalifaPendrops MINGW64 ~/whatever (main)
$ node card.js
� Enter card number please (or press 0 to exit if you have no card number):
 1324567812345678
Card not supported!
� Enter card number please (or press 0 to exit if you have no card number):
 0
Hey �‍♂️ you are exiting the program.
Sure to exit? (Or press 0 again to confirm , or any key to continue):
 i
� Enter card number please (or press 0 to exit if you have no card number):
 41234567891234567
Visa detected
 Number must be 13, 16 or 19 digits
� Enter card number please (or press 0 to exit if you have no card number):
 5555555555554444
Valid ✅
Validated Card: Mastercard
Card Number: 5555 5555 5555 4444
� Enter card number please (or press 0 to exit if you have no card number):

```

---

# Contribution

For contribution and implementation of other card types, make changes and create a PR. Thank you.




