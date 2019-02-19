/**
 * KaprekarsConstant challenge
 * @method      KaprekarsConstant
 * @param       {[type]}          num
 * @constructor
 */
function KaprekarsConstant(num) {
  let small = sortFigure(num, true);
  let large = sortFigure(num, false);
  let times = 1;
  while (large - small !== 6174) {
      let tmpRlt = large - small;
      large = sortFigure(tmpRlt, false);
      small = sortFigure(tmpRlt, true);
      times++;
  }
  return times;

}

function sortFigure(num, isAscend) {
    let tempStr = num.toString();
    while (tempStr.length < 4) {
        tempStr = "0" + tempStr;
    }
    if(isAscend) {
       return parseInt(tempStr.split("").sort().join(""));
    } else {
       return parseInt(tempStr.split("").sort().reverse().join(""));
    }
}
