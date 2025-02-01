import { useState } from "react";

export default function Lottery() {
  let [num, setNum] = useState("000");
  let [title, setTitle] = useState("Lottery");

  let generateNum = () => {
    let num = Math.floor(Math.random() * (1000 - 100)) + 100;
    console.log(num);
    setNum(num);
    checkSum(num);
  };

  let checkSum = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    console.log(sum);
    checkWin(sum);
  };

  let checkWin = (sum) => {
    if (sum == 15) {
      console.log("u won");
      setTitle("You Won!! The Lottery");
    } else {
      console.log("try again");
      setTitle("Try Again");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>try to get a number whose sum of digits is equal to 15</p>
      <h3>Your Ticket Num: {num} </h3>
      <button onClick={generateNum}>Generate</button>
    </div>
  );
}
