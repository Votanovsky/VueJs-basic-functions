<template>
  <input 
  class="mt-2 p-2 rounded-xl border-4 border-red-300" type="text"
  :value="modelValue"
  @input="updateInput"
  >
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style>

</style>