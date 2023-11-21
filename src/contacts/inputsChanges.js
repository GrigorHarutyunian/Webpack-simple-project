import checkImg from "./conctactsIMG/kisspng-check-mark-x-mark-clip-art-check-marks-5a7c0970903068.7393423315180783205906.png";
import xmark from "./conctactsIMG/kisspng-red-x-x-mark-computer-icons-clip-art-red-x-png-5ab19106316800.2072037015215864382024.png";
import { validationObject } from "../index.js";
export function inputChange(obj) {
  let value = "";
  const inputs = document.querySelectorAll("input");
  inputs.forEach((val, i) => {
    val.addEventListener("input", (evt) => {
      const privateDiv = document.getElementById(`privateDiv${i}`);
      value = evt.target.value;
      if (value !== "") {
        privateDiv.style.display = "block";
        const p = document.getElementById(`validateText${i}`);
        const img = document.getElementById(`validateImg${i}`);
        switch (val.id[val.id.length - 1]) {
          case "0":
            p.innerText = isValideName(value).message;
            if (isValideName(value).label === true) {
              img.src = checkImg;
              obj.name = true;
            } else {
              img.src = xmark;
              obj.name = false;
            }
            break;
          case "1":
            p.innerText = isValideName(value).message;
            if (isValideName(value).label === true) {
              img.src = checkImg;
              obj.lastname = true;
            } else {
              img.src = xmark;
              obj.lastname = false;
            }
            break;
          case "2":
            p.innerText = isValideEmail(value).message;
            if (isValideEmail(value).label === true) {
              img.src = checkImg;
              obj.email = true;
            } else {
              img.src = xmark;
              obj.email = false;
            }
            break;
          case "3":
            p.innerText = isValideNumber(value).message;
            if (isValideNumber(value).label === true) {
              img.src = checkImg;
              obj.phoneNumber = true;
            } else {
              img.src = xmark;
              obj.phoneNumber = false;
            }
            break;
        }
      } else {
        privateDiv.style.display = "none";
      }
    });
  });
}

export function textareaChange(obj) {
  const textarea = document.querySelector("textarea");
  const privateDivTextAre = document.querySelector(".privateDivTextArea");
  const p = document.querySelector(".validateTextArea");
  const img = document.querySelector(".validateImgTextArea");
  let value = "";
  textarea.addEventListener("click", () => {
    privateDivTextAre.style.display = "block";
    p.innerText = "write smt longer";
    img.src = xmark;
  });

  textarea.addEventListener("keyup", (evt) => {
    value = evt.target.value;
    if (value !== "") {
      if (value.length < 6) {
        privateDivTextAre.style.display = "block";
        p.innerText = "write smt longer";
        img.src = xmark;
        obj.text = false;
      } else {
        p.innerText = "ok";
        img.src = checkImg;
        obj.text = true;
      }
    } else {
      privateDivTextAre.style.display = "none";
    }
  });
}

function isValideName(value) {
  const obj = {};
  if (value !== "") {
    if (!(value[0].charCodeAt() >= 65 && value[0].charCodeAt() <= 90)) {
      obj.message = "please first letter write in capital";
      obj.label = false;
      return obj;
    } else {
      for (let x = 1; x < value.length; x++) {
        if (!(value[x].charCodeAt() >= 97 && value[x].charCodeAt() <= 122)) {
          obj.message = "the rest must be lowercase";
          obj.label = false;
          return obj;
        }
      }
    }
    obj.message = "valid name";
    obj.label = true;
    return obj;
  }
}

function isValideEmail(value) {
  const obj = {};
  const mailsArr = [
    "@gmail.com",
    "@mail.ru",
    "@list.ru",
    "@internet.ru",
    "@bk.ru",
    "@inbox.ru",
    "@internet.ru",
  ];
  if (value !== "") {
    for (let addres of mailsArr) {
      if (value.search(addres) !== -1) {
        obj.message = "valid email";
        obj.label = true;
        return obj;
      }
    }
    obj.message = "invalid email";
    obj.label = false;
    return obj;
  }
}

function isValideNumber(value) {
  const obj = {};
  if (value !== "") {
    if (
      !(
        value[0] === "+" ||
        (value[0].charCodeAt() >= 48 && value[0].charCodeAt() <= 57)
      )
    ) {
      obj.message = "The first character must be + or a number";
      obj.label = false;
      return obj;
    }

    for (let x = 1; x < value.length; x++) {
      if (!(value[x].charCodeAt() >= 48 && value[x].charCodeAt() <= 57)) {
        obj.message = "The rest should be numbers";
        obj.label = false;
        return obj;
      }
    }
    if (value.length > 17) {
      obj.message = "very long number";
      obj.label = false;
      return obj;
    }

    if (value.length < 6) {
      obj.message = "very short number";
      obj.label = false;
      return obj;
    }
    obj.message = "valid number";
    obj.label = true;
    return obj;
  }
}

export function buttonOnclick() {
  const sendButton = document.querySelector(".but");

  let res = "No";
  sendButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    for (let key in validationObject) {
      if (!validationObject[key]) {
        sendButton.innerText = "X";
      }
    }
    sendButton.innerText = "V";
    const inputs = document.querySelectorAll("input");
    inputs.forEach((val) => {
      val.value = "";
    });
  });
}
