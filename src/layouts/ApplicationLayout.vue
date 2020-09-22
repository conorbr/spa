<template>
  <div id="application-layout" class="application-layout">
    <site-header v-if="displaySiteHeader" site-header></site-header>
    <h1 v-else class="tipito-blue mt-1">Tipito</h1>

    <main class="main-content d-flex flex-column align-items-center
        justify-content-center">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SiteHeader from '../components/headers/SiteHeader.vue';

export default {
  name: 'ApplicationLayout',
  components: {
    SiteHeader,
  },

  computed: {
    displaySiteHeader() {
      let routeName = this.$route.name
      if (routeName === 'SignIn' || routeName === 'SignUp') {
        return false
      }
      return true
    },
  },

  data() {
    return {

    };
  },
};
</script>

<style>
  @import '../assets/stylesheets/layouts/application_layout.scss';
</style>