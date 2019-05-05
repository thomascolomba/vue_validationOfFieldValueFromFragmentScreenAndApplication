<template>
  <div class="about">
    <MyInputC @eventValueInputChangeC="theMyInputChangeFromAbout"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInputC from '@/fragments/MyInputC/MyInputC.fragment.vue'

export default {
  name: 'home',
  components: {
    MyInputC
  },
  methods: {
    theMyInputChangeFromAbout: function (valueFromComponent) {
      console.log('MyInputC.fragment.js theMyInputChangeFromAbout, value : ' + valueFromComponent)
      this.$emit('eventValueInputChangeC') // just passing it along to root (maybe that cool be done automatically, to be checked
    }
  }
}
</script>
