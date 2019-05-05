export default {
  errors: {
    idErrorInputAContainsContentOfInputB: 'idErrorInputAContainsContentOfInputB'
  },

  // returns the detail of the error
  checkInputADoesNotContainContentOfInputB: function (inputAValue, inputBValue, aErrors) {
    var bValidationResult = true
    if(inputBValue.length == 0) {
      return bValidationResult
    }
    var bInputAContainsInputBContent = inputAValue.includes(inputBValue)
    if (bInputAContainsInputBContent) {
      aErrors.push(this.errors.idErrorInputAContainsContentOfInputB)
    }

    bValidationResult = !bInputAContainsInputBContent
    return bValidationResult
  }
}
