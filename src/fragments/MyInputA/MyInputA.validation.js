export default {
  errors: {
    idErrorInputContainsA: 'idErrorInputContainsA'
  },

  // returns the detail of the error
  checkInputDoesNotContainA: function (inputValue, aErrors) {
    var bValidationResult = true
    var bIncludeContainsA = inputValue.includes('a')
    if (bIncludeContainsA) {
      aErrors.push(this.errors.idErrorInputContainsA)
    }

    bValidationResult = !bIncludeContainsA
    return bValidationResult
  }
}
