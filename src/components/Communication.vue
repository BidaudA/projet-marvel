<template lang="pug">
.communication(:class="levelClass")
  //- button(@click="addCount") {{ mixinObj.count }}
  p
    strong(@click="api.counter++") compteur global = {{ api.counter }}

  | {{ toUpperCase('Communication component ') }}
  strong {{ who }}
  p criticité : {{ level }}
  p.text-gray-900
    strong Message depuis API:
    | {{ api.message }}
  p.text-gray-900
    strong Message depuis VUEX:
    | {{ vuexApiMessage }} 
    br
    | {{apiMessageUppercase}}
  p.text-gray-900
    strong Perso depuis VUEX:
    | {{ vuexApiCharactersMessage }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import stringMixin from '../mixins/string.js' 
import api from '../api'

export default {
  name: 'Communication',
  // mixins: [stringMixin],
  data() {
    return {
       color: 'green',
       api: api.data
    }
  },
  props: {
    who: String,
    level: {
      type: Number,
      default: 100,
      validator (value) {
        return value > 0 && value < 1000 && value % 100 === 0
      }
    }
  },
  computed: {
    ...mapGetters({
      apiMessageUppercase: "api/messageUppercase",
    }),
    ...mapState({
      vuexApiMessage: state => state.api.message,
      vuexApiCharactersMessage: state => state.api.characters.message,
    }),
    levelClass() {
      return {
        ['bg-'+this.color+'-'+this.level]: this.highLevel,
        'text-white': this.highLevel,
        'bg-white': !this.highLevel,
        ['text-'+this.color+'-'+this.level]: !this.highLevel,
      }
    },
    highLevel() {
      return  this.level > 500;
    }
  },
  methods: {
    addCount () {
      this.mixinObj.count += 1
    },
    // toUpperCase(value) {
    //   return value.toUpperCase()
    // }
  }
}
</script>

<style>

</style>
