<template>
  <div>
    <div>
      <h1>{{ message }}</h1>
    </div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="incrementProductClicks(product)">Lägg till!</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productClicks: {},
      products: [],
      message: 'Produkter'
    }
  },
  methods: {
    incrementProductClicks(product) {
      if (this.productClicks[product.id]) {
        this.productClicks[product.id]++
      } else {
        this.productClicks[product.id] = 1
      }
    }
  },
  mounted() {
    fetch('/data.json')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Network response was not ok.')
        }
      })
      .then((data) => {
        this.products = data
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error)
      })
  }
}
</script>
