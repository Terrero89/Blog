<template>
<div class="post-page">
  <div class="header">

  <h1>Posts page</h1>
</div>
<div class="posts-page">

    <PostList :posts="loadedPosts" />
</div>
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

.post-page .header{
  font-size: 1.3rem;
  align-items: center;
  text-align: center;
}
</style>
