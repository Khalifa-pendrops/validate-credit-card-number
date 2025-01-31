const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validateCardNumber = (number) => {
  const cardNumber = number.toString().replace(/\s+/g, "");

  if (!/^\d+$/.test(cardNumber)) {
    return "Card number must be made of digits only";
  }

  let typeOfCard = getTypeOfCard(cardNumber);
  if (!typeOfCard) {
    return "Card not supported!";
  }

  if (!getCardLength(cardNumber, typeOfCard)) {
    return `${typeOfCard} detected\n Number must be ${confirmCard(
      cardNumber
    )} digits`;
  }

  let formattedCardNumber = formatCardNumber(cardNumber);
  let isValidLuhn = validateWithLuhn(cardNumber);

  return isValidLuhn
    ? `Valid ✅\nValidated Card: ${typeOfCard}\nCard Number: ${formattedCardNumber}`
    : `Invalid ⛔\nValidated Card: ${typeOfCard}\nCard Number: ${formattedCardNumber}`;
};

const getTypeOfCard = (cardNumber) => {
  let firstTwoDigits = parseInt(cardNumber.substring(0, 2), 10);
  let firstFourDigits = parseInt(cardNumber.substring(0, 4), 10);

  if (/^4/.test(cardNumber)) {
    return "Visa";
  }
  if (
    /^5[1-5]/.test(cardNumber) ||
    /^2(2[2-9][0-9]|2[3-9][0-9]{2}|[3-6][0-9]{3}|7[0-1][0-9]{2}|720)/.test(
      cardNumber
    )
  ) {
    return "Mastercard";
  }
  if (/^(506[1-3]|650[0-9])/.test(cardNumber)) {
    return "Verve";
  }

  return null;
};

const confirmCard = (cardNumber) => {
  const cardLength = {
    Verve: "16, 17, 18 or 19",
    Visa: "13, 16 or 19",
    Mastercard: "16",
  };
  const type = getTypeOfCard(cardNumber);
  return type ? cardLength[type] : "Sorry, unknown card!";
};

const getCardLength = (cardNumber, typeOfCard) => {
  const cardsLength = {
    Verve: [16, 17, 18, 19],
    Visa: [13, 16, 19],
    Mastercard: [16],
  };
  return cardsLength[typeOfCard]?.includes(cardNumber.length) || false;
};

const formatCardNumber = (cardNumber) => {
  return cardNumber.replace(/(\d{4})/g, "$1 ").trim();
};

const validateWithLuhn = (cardNumber) => {
  const digits = cardNumber.split("").map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] = digits[i] * 2 > 9 ? digits[i] * 2 - 9 : digits[i] * 2;

    // if (digits[i] > 9) {
    //   digits[i] = digits[i] - 9;
    // }
  }

  const sumDigits = digits.reduce((sum, digit) => sum + digit, 0);
  return sumDigits % 10 === 0;
};

const inputCardNumber = () => {
  rl.question(
    "💳 Enter card number please (or press 0 to exit if you have no card number):\n ",
    (cardNumber) => {
      if (cardNumber.trim() === "0") {
        console.log("Hey 🙋‍♂️ you are exiting the program.");
        confirmExit();
        return;
      }
      console.log(validateCardNumber(cardNumber));
      inputCardNumber();
    }
  );
};

const confirmExit = () => {
  rl.question(
    "Sure to exit? (Or press 0 again to confirm , or any key to continue):\n ",
    (confirm) => {
      if (confirm.trim() === "0") {
        console.log("Ok the, bye 👋");
        rl.close();
      } else {
        inputCardNumber();
      }
    }
  );
};

inputCardNumber();
