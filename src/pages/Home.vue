<template>
  <div>
    <div>
      <h1>{{ message }}</h1>
    </div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="addProduct(product)">Lägg till!</button>
      </li>
    </ul>
  <div v-if="addedProduct" class="alert">
    Tillagd i kundvagn: {{ addedProduct.name }} ({{ addedProduct.price }} SEK)
  <br>
    Total kostnad: {{ totalPrice }} SEK
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addedProduct: null,
      totalPrice: 0,
      productClicks: {},
      products: [],
      message: 'Produkter'
    }
  },
  methods: {
    incrementProductClicks(product) {
      if (this.productClicks[product.id]) {
        this.productClicks[product.id]++;
      } else {
        this.productClicks[product.id] = 1;
      }
      this.$store.commit('updateTotalClicks', this.productClicks);
    },
    addProduct(product) {
      this.addedProduct = product;
      this.totalPrice += product.price;
  },
  },
  
  async mounted() {
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
