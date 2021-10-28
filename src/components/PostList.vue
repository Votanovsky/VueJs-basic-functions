<template>
    <div 
    class="mt-10"
    v-if="posts.length"
    >
        <h2 class="text-center text-white text-3xl font-bold">Posts List</h2>
        <post-item 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @removePost="$emit('removePost', post)"
        />
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

<style>

</style>