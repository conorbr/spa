<template>
  <div class="container">
    <TextInput v-model="credentials.name" :field="fields.nameField"/>
    <TextInput v-model="credentials.email" :field="fields.emailField" />
    <TextInput v-model="credentials.password" :field="fields.passwordField"/>
    <!-- <TextInput v-model="credentials.password_confirmation" :field="fields.passwordConfirmationField"/> -->
    <button @click.prevent="signUp" type="button" class="btn btn-primary">Sign up</button>
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
        name: '',
        email: '',
        password: '',
      },

      fields: {
        nameField: {
          type: 'text',
          placeholder: 'Johnny Appleseed',
          required: true,
        },

        emailField: {
          type: 'email',
          placeholder: 'your@email.com',
          required: true,
        },

        passwordField: {
          type: 'password',
          required: true,
        },

        passwordConfirmationField: {
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
    signUp() {
      console.log(this.credentials) // eslint-disable-line
      this.$store.dispatch("user/signUp", this.credentials ).then(() =>
        console.log('hello') // eslint-disable-line

      )
    },
  },

}
</script>

<style lang="css" scoped>
</style>
