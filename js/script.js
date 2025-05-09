// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function divideANumber() {
  // Get numbers from the user
  const firstNum = parseInt(document.getElementById("divisor-number").value)
  const secondNum = parseInt(document.getElementById("dividend-number").value)

  let result = 0
  let reminder = firstNum

  // While loop to do repeated subtraction 
  while (true) {
    if (reminder >= secondNum) {
      reminder = reminder - secondNum
      result++
    } else {
      break
    }
  }
  // Show result
    document.getElementById("result").innerHTML =
    '<p>The result is</p>' + result + '<p>The remainder is</p>' + reminder
}