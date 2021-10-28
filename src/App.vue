<template>
  <div class="app">
    <h1
    class="text-center mt-10 text-red-400 font-bold text-3xl"
    >
    Это страница с постами
    </h1>
    <my-button 
    class="block mx-auto mt-2"
    @click="showDialog"
    >
      Создать пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      @createPost="createPost"
      />
    </my-dialog>
    
    <post-list 
    :posts="posts"
    @removePost="filteredPost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default {
  components: {
    PostForm, PostList
  },

  data() {
    return {
      posts: [
        {id: 1, name: 'Олег', descr: 'Сварщик'},
        {id: 2, name: 'Саша', descr: 'Электрик'},
        {id: 3, name: 'Витя', descr: 'Дизайнер'},
      ],
      dialogVisible: false,

    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    filteredPost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    
  },
}
</script>

<style>

</style>