import Vue from 'vue'
import MyInputCValidation from './MyInputC.validation.js'

const MyInputC = Vue.component('MyInputC', {
  data: function () {
    return {
      valueInput: this.$store.state.valueInputC
    }
  },
  methods: {
    theMyInputChangeFromFragment: function () {
      var aErrors = []
      var bComponentValidationSucceeds = MyInputCValidation.checkInputDoesNotContainC(this.valueInput, aErrors)
      if (bComponentValidationSucceeds) {
        this.$store.state.valueInputC = this.valueInput
        console.log('validation successful')
        this.$emit('eventValueInputChangeC')
      } else {
        console.log('validation failure')
      }
    }
  }
})

export default MyInputC
