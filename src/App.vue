<template>
  <v-app>
    <v-content>
      <Navigation />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>
