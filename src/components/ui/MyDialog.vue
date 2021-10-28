<template>
  <div 
  class="top-0 left-0 right-0 bottom-0 bg-red-500 fixed flex"
  v-if="show"
  @click="hideDialog"
  >
    <div 
    class="m-auto relative bg-green-300 rounded-xl opacity-100 py-10 px-6"
    @click.stop
    >
        <slot></slot>
    <span 
    class="absolute font-bold text-red-600 right-3 top-3 cursor-pointer text-xl"
    @click="hideDialog"
    >X</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
}
</script>

<style>

</style>