<template>
  <div>
    <h1>About</h1>
    <p>Total items: {{ totalClicks }}</p>
    <p>Total price: {{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    totalClicks() {
      return Object.values(this.productClicks).reduce((total, clicks) => total + clicks, 0);
    },
    totalPrice() {
      return this.products.reduce((total, product) => total + product.price, 0);
    },
  },
  data() {
    return {
      productClicks: {},
      products: [],
    };
  },
  mounted() {
    fetch('/data.json')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Network response was not ok.')
        }
      })
      .then(data => {
        this.products = data
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error)
      })
  },
};
</script>