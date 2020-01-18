<template>
  <div class="container">
    <form>
      <TextInput :field="fields.email"/>
      <TextInput :field="fields.password"/>
      <Button :field="fields.sumbitButton" />
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
        email: {
          type: 'email',
          placeholder: 'your@email.com',
          required: true,
        },
        password: {
          type: 'password',
          required: true,
        },
        sumbitButton: {
          type: 'submit',
        }
      }
    }
  }

}
</script>

<style lang="css" scoped>
</style>
