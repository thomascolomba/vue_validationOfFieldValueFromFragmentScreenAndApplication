export default {
  errors: {
    idErrorInputContainsB: 'idErrorInputContainsB'
  },

  // returns the detail of the error
  checkInputDoesNotContainB: function (inputValue, aErrors) {
    var bValidationResult = true
    var bIncludeContainsB = inputValue.includes('b')
    if (bIncludeContainsB) {
      aErrors.push(this.errors.idErrorInputContainsB)
    }

    bValidationResult = !bIncludeContainsB
    return bValidationResult
  }
}
