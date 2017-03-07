/**
  * Returns a pace out of 60 seconds. 1.5 minutes becomes 1:30/mile
  * @param { number } t - time
  * @param { number } d - distance
*/

export function formatPace(t, d) {
  const prefix = Math.floor((t/60)/d).toString(); 
  const suffix = Math.floor((((t/60)/d - Math.floor((t/60)/d)) * 60));

  const suffixStr = suffix.toString();
  //if the second number does not have a 0 in front of it, this equation will add that 0
  //eslint-disable-next-line
  return suffix >= 10 ? prefix + ':' + suffixStr : prefix + ':' + '0' + suffixStr; 
}

export function formatTime(t) {
  const arr = t.split(':')
  const sec = Number(arr[arr.length - 1]);
  const min = arr[arr.length - 2];
  const minSec = Number((min * 60));
  const hour = arr[arr.length - 3];
  const hourSec = Number((hour * 60) * 60);
  if(arr.length === 2){
    console.log(sec + minSec)
    return sec + minSec;
  }else if(arr.length === 3){
    console.log(sec + minSec + hourSec);
    return sec + minSec + hourSec;
  }
}

export function decimalRound(value, decimals) {
  return Number(Math.round(value+"e"+decimals)+"e-"+decimals);
}