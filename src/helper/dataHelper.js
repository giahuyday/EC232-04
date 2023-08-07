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
    const newNumber=  '$'+numeral(number).format('0,0').toString()
    return newNumber;
  }
  function formatPoints(number) {
    const newNumber=  numeral(number).format('0,0')+' Coin'.toString()
    return newNumber;
  }
  function calBeDiscount(price, discountPercentage) {
    if (typeof price !== 'number' || typeof discountPercentage !== 'number' || price < 0 || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error('Invalid input.');
    }
    const discountAmount = (price * discountPercentage) / 100;
    return discountAmount;
  }
  module.exports = {
    calDiscount,
    formatNumber,
    formatPoints,
    calBeDiscount
  };
  