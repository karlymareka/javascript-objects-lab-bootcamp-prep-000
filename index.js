var recipes = new Object();


function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({},object)
  return object
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  var newObj = Object.assign({}, object)
  
}