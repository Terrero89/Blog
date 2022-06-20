<template>
<div class="posts-page">
    <PostList :posts="loadedPosts" />
</div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
    components: {
        PostList,
    },
    //before the computed prop, we could not see the data in blogs, we needed to retrieve that info from vuex
    computed:{
      loadedPosts(){
        return this.$store.getters.loadedPosts
      }
    },
  //lifeCircle hook
  //it will run to create send thedata from the laoded post from vuex to the loadedPosts in this component.
  //this ensures the data is loded when component is
  //!WE WILL NOT LONGER NEED THE CREATED METHOD IF WE USE FETCH INSTEAD OF ASYNCDATA
  //! ETCH RUNS IN BOTH, CLIENT AND SERVER
    // created(){
    //     this.$store.dispatch('setPosts', this.loadedPosts)
    // }
};
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
