<template>
    <div 
    class="mt-10"
    v-if="posts.length"
    >
        <h2 class="text-center text-white text-3xl font-bold">Posts List</h2>
        <transition-group name="user-list">
            <post-item 
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @removePost="$emit('removePost', post)"
            />
        </transition-group>
    </div>
    <h2 
    v-else
    class="text-center mt-10 text-red-400 font-bold text-3xl">Ни одного поста не добавлено!</h2>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
    components: {PostItem},

    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
  
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all .4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>