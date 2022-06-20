<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">{{loadedPost.updatedDate}}</div>
        <div class="post-detail">{{loadedPost.author}}</div>
      </div>
      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        //?DATA WILL BE HERE TO BE RETRIEVE.
        //?context hold all route parameters, is easier to use when instances are created.
      //? and will be asynced
      // contex.route.params -- access all the routes params, if specified id, then will retrieve specific id
        loadedPost: {
          id: "1",
          title: "Golang, the special C++ (ID: " + context.route.params.id + ")", //?context.route.params is == this,.$route.params, is just loaded on initial loading and this.$route is not.
          previewText: "golang is an amazing language because...",
          author: "Sergio Terrero",
          updatedDate: new Date(),
          content: 'some dummy text for us to see previewed',
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
        },
      });
    }, 1000);
  },
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
