<template>
    <div>
      <img v-bind:src="imageUrl" alt="Cat Pic">
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