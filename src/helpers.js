/**
  * Returns a pace out of 60 seconds. 1.5 minutes becomes 1:30/mile
  * @param { number } t - time
  * @param { number } d - distance
*/

export function formatPace(t, d){
  const prefix = Math.floor(t/d).toString(); 
  const suffix = Math.floor(((t/d - Math.floor(t/d)) * 60));
  const suffixStr = suffix.toString();

  //if the second number does not have a 0 in front of it, this equation will add that 0
  // eslint-disable-next-line
  return suffix >= 10 ? prefix + ':' + suffixStr : prefix + ':' + '0' + suffixStr; 
}