<template>
  <div class="container">
    <TextInput v-model="credentials.email" :field="fields.emailField" />
    <TextInput v-model="credentials.password" :field="fields.passwordField"/>
    <button @click.prevent="signin" type="button" class="btn btn-primary">Sign In</button>
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'
// import Button from '@/components/form/Button.vue'

export default {
  components: {
    TextInput,
    // Button,
  },

  data(){
    return{
      credentials: {
        email: '',
        password: '',
      },

      fields: {
        emailField: {
          type: 'email',
          placeholder: 'your@email.com',
          required: true,
        },

        passwordField: {
          type: 'password',
          required: true,
        },

        sumbitButton: {
          type: 'submit',
        },
      }
    }
  },

  methods: {
    signin() {
      console.log(this.credentials) // eslint-disable-line
      this.$store.dispatch("user/signIn", this.credentials ).then(() =>
        console.log('hello') // eslint-disable-line

      )
    },
  },

}
</script>

<style lang="css" scoped>
</style>
