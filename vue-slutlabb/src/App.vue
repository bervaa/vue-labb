<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>

  <div>
   <div>
    <label for="input">Enter your name:</label>
    <input v-model="name" id="input" type="text">
    <p>Your name is: {{ name }}</p>
  </div>
    <h1>{{ message }}</h1>
    <div v-if="showProducts">
      <h1>Products</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}
        </li>
      </ul>
    </div>
    <button @click="showProducts = !showProducts">Show/Hide Products</button>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <button v-on:click="incrementCounter">Click me!</button>
     <p>Counter: {{ counter }}</p>
    <RouterView />
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      products: [],
      message: "Välkommen!",
      showProducts: true,
      counter: 0,
      
    };
  },
  mounted() {
    fetch('/data.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        this.products = data;
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
  },
  methods: {
    incrementCounter() {
      this.counter++
    },
  },
};
</script>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
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

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
