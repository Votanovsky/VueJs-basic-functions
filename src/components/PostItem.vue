<template>
  <div 
    class="w-3/5 text-center mx-auto py-2 bg-white border-4 border-red-300 mt-2 rounded-xl"
    >
    <div><span class="font-bold">Имя </span>{{post.name}}</div>
    <div><span class="font-bold">Описание: </span>{{post.descr}}</div>
    <div class="mt-3">
        <my-button
        @click="$emit('removePost', post)"
        >
        Удалить
        </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      post: {
          type: Object,
          required: true
      }
  }
}
</script>

<style>

</style>