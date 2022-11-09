/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//DOM elements
const convertBtn = document.querySelector(".convert-btn");
const lengthOutput = document.querySelector("#length-conversion");
const volumeOutput = document.querySelector("#volume-conversion");
const massOutput = document.querySelector("#mass-conversion");

//declare input value
let value;

convertBtn.addEventListener("click", function() {
  //reassign input value after click
  value = document.querySelector(".input-number").value;
   
  //unit conversion with value, rounded to 3 decimals
  let feetOutput = Math.round((value * 3.281)*1000) / 1000;  
  let metersOutput = Math.round((value / 3.281)*1000) / 1000;

  let literOutput = Math.round((value * 0.264)*1000) / 1000;
  let gallonOutput = Math.round((value / 0.264)*1000) / 1000;

  let kiloOutput = Math.round((value * 2.204)*1000) / 1000;
  let poundOutput = Math.round((value / 2.204)*1000) / 1000;

  //in case of value === 1, display correct grammar
  if (value != 1)  {
  lengthOutput.innerText = `${value} meters = ${feetOutput} feet | ${value} feet = ${metersOutput} meters`
  volumeOutput.innerText = `${value} liters = ${literOutput} gallons | ${value} gallons = ${gallonOutput} liters`
  massOutput.innerText = `${value} kilos = ${kiloOutput} pounds | ${value} pounds = ${poundOutput} kilos`
  }

  else {
    lengthOutput.innerText = `${value} meter = ${feetOutput} feet | ${value} feet = ${metersOutput} meters`
    volumeOutput.innerText = `${value} liter = ${literOutput} gallons | ${value} gallon = ${gallonOutput} liters`
    massOutput.innerText = `${value} kilo = ${kiloOutput} pounds | ${value} pound = ${poundOutput} kilos`

}})