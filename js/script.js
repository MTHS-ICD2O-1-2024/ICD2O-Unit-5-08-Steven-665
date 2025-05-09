// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function divideANumber() {
  // Get numbers from the user
  let divisorNum = parseInt(document.getElementById("divisor-number").value)
  let dividendNum = parseInt(document.getElementById("dividend-number").value)

  let result = 0
  let negativeResult = false
  let reminder = dividendNum

  // Check if the result should be negative
  if ((divisorNum < 0 && dividendNum > 0) || (divisorNum > 0 && dividendNum < 0)) {
    negativeResult = true
  }

  // Make both numbers positive
  if (divisorNum < 0) {
    divisorNum = 0 - divisorNum
  }
  if (dividendNum < 0) {
    dividendNum = 0 - dividendNum
  }

  // Divide using repeated addition
  while (true) {
    if (reminder >= divisorNum ) {
      reminder -= divisorNum
      result++
  } else {
    break;
  }

  // Make result negative if needed
  if (negativeResult) {
    result = 0 - result
  }
}
  // Show result
    document.getElementById("result").innerHTML =
    '<p>The result is</p>' + result + '<p>The remainder is</p>' + reminder
}