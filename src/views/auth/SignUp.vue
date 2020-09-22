<template>
  <div class="sign-up content-box sign-in w-75">
    <h1 class="d-flex justify-content-center tipito-blue mb-5">Sign Up</h1>
    <b-form-input v-model="credentials.name" placeholder="name" type="text" class="mt-2 input-tipito" size="lg"/>
    <b-form-input v-model="credentials.email" placeholder="email" type="email" class="mt-2 input-tipito" size="lg"/>
    <b-form-input v-model="credentials.password" placeholder="password" type="password" class="mt-2 input-tipito" size="lg"/>
    <!-- <TextInput v-model="credentials.password_confirmation" :field="fields.passwordConfirmationField"/> -->
    <b-link class="tipito-blue" :to="{ name: 'SignIn' }">Already registered?</b-link>

    <div class="d-flex justify-content-center mt-5">
      <b-button @click.prevent="signUp" type="button" variant="tipito-white">
        Sign Up
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
        name: '',
        email: '',
        password: '',
      },
    }
  },

  methods: {
    signUp() {
      console.log(this.credentials) // eslint-disable-line
      this.$store.dispatch("user/signUp", this.credentials)
          .then(() => { router.push('home') })
          .catch((error) => { throw error })
    },
  },

}
</script>

<style scoped>
@import '../../assets/stylesheets/components/views/auth/sign-up.scss';
</style>
