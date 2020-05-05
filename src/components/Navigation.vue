<template>
  <div>
    <v-toolbar flat app>
      <v-toolbar-title class="blue--text">
        <span>Tipi</span>
        <span class="font-weight-light">to</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`" class="pl-2">{{routes.text}}
      </router-link>
    </v-toolbar>
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
