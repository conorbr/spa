<template>
  <div>
    <router-link v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}
    </router-link>
  </div>
</template>

<script>
export default {

  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page: '/'
        },
        {
          id: 1,
          text: 'About',
          page: '/About'
        },
        {
          id: 2,
          text: 'Contact',
          page: '/Contact'
        },
        {
          id: 3,
          text: 'Farts',
          page: '/Farts'
        },
      ]
    }
  }

}
</script><!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
