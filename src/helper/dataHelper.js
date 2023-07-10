import numeral from "numeral";
function calDiscount(price, discountPercentage) {
    if (typeof price !== 'number' || typeof discountPercentage !== 'number' || price < 0 || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error('Invalid input.');
    }
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice;
  }
  function formatNumber(number) {
    return numeral(number).format('0,0');
  }
  module.exports = {
    calDiscount,
    formatNumber
  };
  