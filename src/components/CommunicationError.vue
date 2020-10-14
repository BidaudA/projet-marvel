<script>
import Communication from './Communication.vue';
export default {
  name: 'CommunicationError',
  extends: Communication,
  data() {
    return {
      color: 'red'
    }
  },
  computed: {
    highLevel() {
      return  this.level > 200;
    }
  }
}
</script>

<style>
</style>
