const removeFromArray = function (...args) {
  const array = arguments[0]
  for(let i = 1; i < arguments.length; i++){
    array.splice(array.indexOf(arguments[i]),1)
  }


  // array.splice(array.indexOf(elem), 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
