const removeFromArray = function (...args) {
  let array = arguments[0];
  const elem = arguments[1];

  for (let i = 1; i < arguments.length; i++) {
    array = deleteElem(array, arguments[i]);
  }
  return array;
};
function deleteElem(array, elem) {
  let resp = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== elem) {
      resp.push(array[i]);
    }
  }
  return resp;
}
// Do not edit below this line
module.exports = removeFromArray;
