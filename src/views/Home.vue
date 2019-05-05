<template>
  <div class="home">
    <MyInputA @eventValueInputChangeA="theMyInputAChangeFromHome"/>
    <br/>
    <MyInputB @eventValueInputChangeB="theMyInputBChangeFromHome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInputA from '@/fragments/MyInputA/MyInputA.fragment.vue'
import MyInputB from '@/fragments/MyInputB/MyInputB.fragment.vue'
import HomeValidation from './Home.validation.js'

function doValidationWithInputsAB (that) {
  console.log('Home.vue theMyInputAChangeFromHome, value from store : ' + that.$store.state.valueInputA)
  var aErrors = []
  var inputAValue = that.$store.state.valueInputA
  var inputBValue = that.$store.state.valueInputB
  console.log('value of B : ' + inputBValue)
  var bHomeScreenValidationSucceeds = HomeValidation.checkInputADoesNotContainContentOfInputB(inputAValue, inputBValue, aErrors)
  if (bHomeScreenValidationSucceeds) {
    // that.$emit('eventValueInputChangeAOrB')
  } else {
    console.log('validation failure')
  }
}

export default {
  name: 'home',
  components: {
    MyInputA,
    MyInputB
  },
  methods: {
    theMyInputAChangeFromHome: function (valueFromComponent) {
      doValidationWithInputsAB(this)
    },
    theMyInputBChangeFromHome: function (valueFromComponent) {
      doValidationWithInputsAB(this)
    }
  }
}
</script>
