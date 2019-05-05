<template>
  <div class="myInputA">
    <div>
      <input v-model="valueInput" placeholder="Enter a value" @change="theMyInputChangeFromFragment"/>
      <div>Value of input A : {{ valueInput }}</div>
    </div>
  </div>
</template>
<script src="./MyInputA.fragment.js"></script>
<style src="./MyInputA.fragment.css"></style>
