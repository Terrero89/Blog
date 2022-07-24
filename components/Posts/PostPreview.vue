<template>
  <!-- template will display a section of the post clicked -->
  <nuxt-link :to="postLink" class="post-preview">

    <article>
      <!-- the styles are bond to be used dynamically -->
      <div class="post-thumbnail" :style="{ backgroundImage: 'url(' + thumbnail + ')' }"></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  // computed property that checks if user is admin or not.
  // if admin, a special route with different layout displayed
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id //by using this id, the prop will use the id of the element clicked in the parent component
    }
  }
}
</script>


<style scoped>
.post-preview {
  border: 1px solid rgb(247, 247, 247);
  border-radius: 10px;
box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.15);
  background-color: white;
  width: 90%;

  margin: 1rem 0;

}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  border: 1px solid rgb(241, 241, 241);
  width: 100%;
  height: 220px;
  background-position: center;
  background-size: cover;
  object-fit:fill;
  border-bottom: solid rgb(0, 0, 0,0.1) 1px;

}

.post-content {
  padding: 10px;
  text-align: center;
  padding: 2rem;
  min-height: 9rem;
}

a:hover .post-content,
a:active .post-content {
  background-color: rgb(231, 227, 227);
  border-radius: 10px;
}
</style>
