<template>
  <div class="myInputC">
    <div>
      <input v-model="valueInput" placeholder="Enter a value" @change="theMyInputChangeFromFragment"/>
      <div>Value of input C : {{ valueInput }}</div>
    </div>
  </div>
</template>
<script src="./MyInputC.fragment.js"></script>
<style src="./MyInputC.fragment.css"></style>
