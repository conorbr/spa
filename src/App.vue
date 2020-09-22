<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import ApplicationLayout from './layouts/ApplicationLayout.vue';

export default {
  name: 'app',
  components: {
    'application-layout': ApplicationLayout,
  },

  data() {
    return {
    };
  },

  computed: {
    layout() {
      return 'application-layout';
    },
  },
};
</script>

<style lang="scss">
  @import 'assets/stylesheets/application.scss';
</style>