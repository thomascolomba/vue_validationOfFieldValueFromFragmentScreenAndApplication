<template>
  <div class="myInputB">
    <div>
      <input v-model="valueInput" placeholder="Enter a value" @change="theMyInputChangeFromFragment"/>
      <div>Value of input B : {{ valueInput }}</div>
    </div>
  </div>
</template>
<script src="./MyInputB.fragment.js"></script>
<style src="./MyInputB.fragment.css"></style>
