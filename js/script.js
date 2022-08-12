console.log("we are in the JS file")

const addNumbers = (first, second) => {
  return first + second;
}

if(typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}

