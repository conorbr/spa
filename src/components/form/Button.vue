<template>
  <div class="form-group">
    <button :type="field.type" class="btn btn-primary">Primary</button>
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
