<template>
  <div class="container">
    <form ref=signIn>
      <TextInput :field="fields.emailField"/>
      <TextInput :field="fields.passwordField"/>
      <Button @click.native="signin" :field="fields.sumbitButton" />
      <a href="#" @click="signin"></a>
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'
import Button from '@/components/form/Button.vue'

export default {
  components: {
    TextInput,
    Button,
  },

  data(){
    return{
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

  computed: {

  },

  methods: {
    async signin() {
      this.$store.dispatch("user/signIn", "123").then(() =>
        console.log('hello') // eslint-disable-line

      )
    },
  },

}
</script>

<style lang="css" scoped>
</style>
