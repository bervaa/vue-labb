<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PicCat from './components/PicCat.vue';
</script>
<template>
  <div id="app">
    <div class="header">
      <h1 class="title">Bästa Affären</h1>
      <div class="input-container">
          <PicCat v-bind:image-url="catImageUrl"></PicCat>
        <label for="name-input">Vad heter du?</label>
        <input id="name-input" type="text" v-model="name" />
        <p v-if="name" class="welcome-text">Välkommen, {{ name }}!</p>
      </div>
    </div>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/checkout">Kassa</RouterLink>
      </nav>
      <RouterView />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: { PicCat },
  
  data() {
    return {
      name: '',
      catImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUQVmoOPBNYHglIkKn_f32atE3LMCSFM9SA&usqp=CAU",
    

    }
  }
}
</script>

<style>

.header {
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>



<style scoped>
header {
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px; }

.title {
  color: black;
  
}
.input-container {
  color: black;

}
.welcome-text {
  color: black;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
