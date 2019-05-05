import Vue from 'vue'
import MyInputBValidation from './MyInputB.validation.js'

const MyInputB = Vue.component('MyInputB', {
  data: function () {
    return {
      valueInput: this.$store.state.valueInputB
    }
  },
  methods: {
    theMyInputChangeFromFragment: function () {
      var aErrors = []
      var bComponentValidationSucceeds = MyInputBValidation.checkInputDoesNotContainB(this.valueInput, aErrors)
      if (bComponentValidationSucceeds) {
        this.$store.state.valueInputB = this.valueInput
        console.log('validation successful')
        this.$emit('eventValueInputChangeB')
      } else {
        console.log('validation failure')
      }
    }
  }
})

export default MyInputB
