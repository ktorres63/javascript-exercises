const convertToCelsius = function(fah) {
  rsp = (fah-32)/1.8
  rsp = toInteger(rsp)
  return rsp ;
};

const convertToFahrenheit = function(celc) {
  rsp = (celc * 1.8)+32
  rsp = toInteger(rsp)
  return rsp ;
  
};

function toInteger(num){
  num = parseFloat(num.toFixed(1));
  if((num * 10)%10 === 0){
    num= parseInt(rsp)
  }
  return num ;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
