export default {
  errors: {
    idErrorInputContainsC: 'idErrorInputContainsC'
  },

  // returns the detail of the error
  checkInputDoesNotContainC: function (inputValue, aErrors) {
    var bValidationResult = true
    var bIncludeContainsC = inputValue.includes('c')
    if (bIncludeContainsC) {
      aErrors.push(this.errors.idErrorInputContainsC)
    }

    bValidationResult = !bIncludeContainsC
    return bValidationResult
  }
}
