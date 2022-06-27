<template>
<!-- admin page -->
  <div class="admin-page">
    <section class="new-post">
      <!-- button will route the user to the below route -->
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <!-- is admin,  is using the PostList and specifying that is from  an admin page.-->
      <PostList isAdmin  :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },

  computed:{
    //will be passed to the posts props (binded)
    //it will load the post in the admin section and
    
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

