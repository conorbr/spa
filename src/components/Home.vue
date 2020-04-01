<template>
  <div>
    <h1>{{ msg }}</h1>
    <span>hello</span>
    <button type="button" @click="signOut" name="button">sign out</button>
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
    signOut() {
      this.$store.dispatch('user/signOut')
  }
}
}
</script>
