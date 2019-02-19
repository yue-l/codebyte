
/**
 * First Reverse
 * @method      FirstReverse
 * @param       {String}     str a text string
 */
function FirstReverse (str) {
  let array = str.split('');
  let reversedArray = array.reverse();
  return reversedArray.join('');
}
