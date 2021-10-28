<template>
  <div class="app">
    <post-form
    @createPost="createPost"
    />
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
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    filteredPost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  },
}
</script>

<style>

</style>