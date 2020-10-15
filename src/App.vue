<template>
<div id="app">
  <h1>List of Marvel's Characters</h1>

  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Nom</th>
          <th class="px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="character in info.data.results" :key="character.id">
          <td class="border px-4 py-2">{{ character.name }}</td>
          <td class="border px-4 py-2">{{ character.description }}</td>
        </tr>
        
      </tbody>
    </table>
    </div>
  </section>

  
</div>
</template>

<script>

/* import api from './api'
import { mapActions } from 'vuex' */
import axios from 'axios'

// import stringMixin from './mixins/string.js'

export default {
  name: 'App',
  el: '#app',
  components: {

  },
  // mixins: [stringMixin],
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  methods: {

  },
  computed: {
    
  },
  mounted() {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?limit=99&apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92')
      .then(response => {
        this.info = response.data
        console.log(this.info.data)
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
