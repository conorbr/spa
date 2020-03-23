<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="getJobs" name="button">button</button>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'This is the home page'
    }
  },

  methods: {
    getJobs() {
      this.$store.dispatch('jobs/get')
  }
}
}
</script>
