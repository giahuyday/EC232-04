const numeral = require('numeral');

function calDiscount(price, discountPercentage) {
    if (typeof price !== 'number' || typeof discountPercentage !== 'number' || price < 0 || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error('Invalid input.');
    }
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice;
  }
  function formatNumber(number) {
    try {
      const newNumber=  '$'+numeral(number).format('0,0').toString()
      return newNumber;
    }
    catch(err){
      console.log(err)
    }
    
  }
  function formatNum(number) {
    try {

      const newNumber=  numeral(number).format('0,0').toString()
      return newNumber;
    }
    catch(err){
      console.log(err)
    }
  }
  function formatPoints(number) {
    try {

      const newNumber=  numeral(number).format('0,0')+' Coin'.toString()
      return newNumber;
    } 
    catch(err) {
      console.log(err)
    }
    }
  function calBeDiscount(price, discountPercentage) {
    if (typeof price !== 'number' || typeof discountPercentage !== 'number' || price < 0 || discountPercentage < 0 || discountPercentage > 100) {
     return -1
    }
    const discountAmount = (price * discountPercentage) / 100;
    return discountAmount;
  }
  module.exports = {
    calDiscount,
    formatNum,
    formatNumber,
    formatPoints,
    calBeDiscount,
  };
  