<template>
    <div>
      <img v-bind:src="imageUrl" alt="Cat Icon">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: {
        type: String,
        required: true,
      }
    }
  };
  </script>