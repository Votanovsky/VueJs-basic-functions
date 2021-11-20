<template>
  <select class="py-1 bg-red-300 text-center rounded-xl" v-model="modelValue"
  @change="changeOption"
  >
      <option disabled value="">
          Сортировать пост
      </option>
      <option 
      v-for="option in options" 
      :key="option.value"
      :value="option.value"
      >{{option.name}}</option>
  </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: ()=> []
        }
    },
    methods: {
        changeOption(event) {
            console.log(event);
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style>

</style>