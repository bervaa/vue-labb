<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PicCat from './components/PicCat.vue';
import IconCat from './components/icons/IconCat.vue'
</script>
<template>
  <div id="app">
    <div class="header">
      <IconCat v-bind:image-url="catImageUrl2"></IconCat>
      <h1 class="title">{{ message }}</h1>
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
      message: 'Butiken Zoot',
      catImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUQVmoOPBNYHglIkKn_f32atE3LMCSFM9SA&usqp=CAU",
      catImageUrl2: "https://cdn.iconscout.com/icon/premium/png-64-thumb/cat-236-515959.png?f=avif"
    

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
.alert {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
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
nav a.router-link-exact-active {
  color: var(--color-text);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
