const removeFromArray = function (...args) {
  const array = arguments[0];
  const elem = arguments[1];
  
 
  return deleteElem(array,elem);
};
function deleteElem(array,elem){
  let resp = []
  for(let i = 0; i<array.length;i++){
      if(array[i] !== elem){
          resp.push(array[i])
      }
  }
  return resp
}
// Do not edit below this line
module.exports = removeFromArray;
