<template>
    <div class="mt-10">
        <h2 class="text-center text-white text-3xl font-bold">Posts List</h2>
        <post-item 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @removePost="$emit('removePost', post)"
        />
    </div>
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