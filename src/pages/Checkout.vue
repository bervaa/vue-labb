<template>
  <div>
    <div>
      <h1>{{ message }}</h1>
    </div>
    <p>Produkter: {{ totalClicks }}</p>
    <p>Totalt pris: {{ totalPrice }}</p>
    <button @click="resetData">Töm kundvagn</button>
  </div>
  <label for="currencies">Välj valuta:</label>
    <select name="currencies">
  <option v-for="currency in currencies" :key="currency.name">
    {{ currency.name }} - {{ currency.rate }}</option>

</select>
</template>

<script>
export default {
  computed: {
    totalClicks() {
      return Object.values(this.productClicks).reduce((total, clicks) => total + clicks, 0)
    },
    totalPrice() {
      return this.products.reduce((total, product) => total + product.price, 0)
    }
  },
  data() {
    return {
      productClicks: {},
      products: [],
      message: 'Kassa',
      currencies: {},
    
    }
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
      });
      const response = await fetch("https://www.floatrates.com/daily/usd.json");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const myBlob = await response.json();
    this.currencies = myBlob
    console.log(myBlob)
  }
}
</script>
