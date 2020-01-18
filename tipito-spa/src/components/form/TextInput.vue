<template>
  <div class="form-group">
    <input :type="field.type" :placeholder="field.placeholder" class="form-control">
  </div>
</template>

<script>
export default {
  props: {
    field: Object,
  }
}
</script>

<style lang="css" scoped>
</style>
