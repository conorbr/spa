<template>
  <div class="content-box sign-in w-75">
    <h1 class="d-flex justify-content-center tipito-blue">Sign In</h1>
    <div class="mt-5">
      <b-form-input v-model="credentials.email" placeholder="email" type="email" size="lg" class="mt-2 input-tipito"/>
      <b-form-input v-model="credentials.password" placeholder="password" type="password" size="lg" class="mt-2 input-tipito"/>
      <b-link class="tipito-blue" :to="{ name: 'SignUp' }">don't have an account?</b-link>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <b-button @click.prevent="signin" type="button" variant="tipito-white">
        Sign In
      </b-button>
    </div>
  </div>
</template>

<script>
import router from '@/router/index'

export default {
  data(){
    return{
      credentials: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    signin() {
      this.$store.dispatch("user/signIn", this.credentials)
          .then(this.$store.dispatch("jobs/get"))
          .then(router.push('home'))
          .catch((error) => { throw error })
    },
  },
};
</script>

<style scoped>
  @import '../../assets/stylesheets/components/views/auth/sign-in.scss';
</style>
