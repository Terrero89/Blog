<template>
  <section class="post-list">
    <PostPreview
    v-for="post in posts"
     :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />

  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  // will bind prop to is admin, to be able to detect if is admin or not, and display info
  props: {
    //? we are adding the isAdmin to the specific admin page posts, so we could edit them
    isAdmin: {
      type: Boolean,
      default: false
    },
    // post that we are going to loop through, coming from a parent component,or pina/vuex
    //?we are passing this prop and binded to the loaded post from vueex in admin
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 90rem;
  margin: 0 auto;
}
</style>

