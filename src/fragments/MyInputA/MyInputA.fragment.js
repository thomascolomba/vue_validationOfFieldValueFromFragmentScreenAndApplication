import Vue from 'vue'
import MyInputValidation from './MyInputA.validation.js'

const MyInputA = Vue.component('MyInputA', {
  data: function () {
    return {
      valueInput: this.$store.state.valueInputA
    }
  },
  methods: {
    theMyInputChangeFromFragment: function () {
      var aErrors = []
      var bComponentValidationSucceeds = MyInputValidation.checkInputDoesNotContainA(this.valueInput, aErrors)
      if (bComponentValidationSucceeds) {
        this.$store.state.valueInputA = this.valueInput
        console.log('validation successful')
        this.$emit('eventValueInputChangeA')
      } else {
        console.log('validation failure')
      }
    }
  }
})

export default MyInputA
