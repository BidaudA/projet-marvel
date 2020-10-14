import {
  reactive
} from 'vue'
import axios from 'axios'

const api = {
  data: {
    counter: 1000,
    message: 'rien',
    isLoading: false,
    // character: {}
  },
  reset() {
    this.data.counter = 0
  },
  // loadCharacter(name) {
  //   this.load
  // }
  load(url) {
    this.data.isLoading= true
    setTimeout(() => {
      axios.get(url)
        .then((response) => {
          console.log(response.data.data),
          this.data = response.data.data
        })
        .catch(console.error)
        .then(() => {
          this.data.isLoading = false
        })
    }, 3000)
  }
}
export default reactive(api)