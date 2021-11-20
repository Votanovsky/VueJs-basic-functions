<template>
  <div class="app flex flex-col justify-center text-center">
    <h1
    class="text-center mt-10 text-red-400 font-bold text-3xl"
    >
    Это страница с постами
    </h1>
    <div class=" mx-auto mt-2 flex flex-col w-3/5">
      <my-button 
      class="block mb-2"
      @click="showDialog"
      >
        Создать пост
      </my-button>
      <input 
      class="mb-2 text-center rounded-xl py-1"
      type="text" v-model="searchQuery" placeholder="Поиск"
      >
      <my-select v-model="selectedSort" :options="sortOptions"/>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      @createPost="createPost"
      />
    </my-dialog>
    
    <post-list 
    :posts="sortedAndSearchingPost"
    @removePost="filteredPost"
    v-if="!isPostLoading"
    />
    <div class="text-red-500" v-else>Идёт загрузка...</div>
    <!-- <div class="flex mt-2 flex-wrap px-2 justify-center">
      <div class="flex justify-center items-center border-2 bg-white rounded-xl w-10 h-10 mr-2 mb-1 cursor-pointer"
      v-for="pageNumber in totalPages" :key="pageNumber"
      @click="changePage(pageNumber)"
      :class="{
        'border-red-500 text-red-500' : page === pageNumber
      }"
      >
      {{pageNumber}}.</div>
    </div> -->
    <div data-observed  ref="observer"></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

import axios from 'axios';


export default {
  components: {
    PostForm, PostList,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
      page: 1,
      limit: 5,
      totalPages: 0,

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
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch(e) {
        alert('Упс.. Ошибка!')
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadPage() {
      try {
        this.page +=1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch(e) {
        alert('Упс.. Ошибка!')
      } 
    }
  },

  mounted() {
    this.fetchPosts()

    const options = {
        rootMargin: '0px',
        threshold: 1.0
    }
    const callback = (entries, observer) => {
        if(entries[0].isIntersecting && this.page < this.totalPages) {
          this.loadPage()
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },

  computed: {
    sortedPost() {
      return [...this.posts].sort( (post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      } )
    },
    sortedAndSearchingPost() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort( (post1, post2) => {
    //     return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //   } )
    // }
    
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>

</style>