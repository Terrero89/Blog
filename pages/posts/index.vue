<template>
<div class="posts-page">
    <PostList :posts="loadedPosts" />
</div>
</template>

<script>


export default {
  // middleware: 'log',
    //before the computed prop, we could not see the data in blogs, we needed to retrieve that info from vuex
    computed:{
      loadedPosts(){
        return this.$store.getters.loadedPosts
      }
    },


};
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
