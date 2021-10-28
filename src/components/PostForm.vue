<template>
  <form class="flex flex-col w-3/4 mx-auto"
  @submit.prevent
  >
    <my-input
    type="text" placeholder="Имя"
    v-model="post.name"
    />
    <!-- Указываем с АТРИБУТОМ,когда несколько(только во VUE3)  v-model:value="post.name" -->
    <my-input
    type="text" placeholder="Описание"
    v-model="post.descr"
    />
    <div class="mt-2 ml-auto">
        <my-button 
        class="bg-red-300 px-6 py-1 rounded-xl hover:bg-red-400"
        @click="createPost()"
        >
        Добавить
        </my-button>
    </div>
  </form>
</template>

<script>
import MyInput from './ui/MyInput.vue'
export default {
  components: { MyInput },
    data() {
        return {

                post: {
                name: '',
                descr: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now(),
            this.$emit('createPost', this.post, 'one')
            this.post = {
                name: '',
                descr: '',
            }
        }
    },

}
</script>

<style>

</style>