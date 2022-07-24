<template>
  <div class="single-post-page">
    <section class="post">
      <div class="post-container">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <p class="post-content">{{ loadedPost.content }}</p>
        <div class="post-detail">{{ loadedPost.author }}</div>
        <div class="post-detail">{{ loadedPost.updatedDate | date }}</div>

      </div>



    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  asyncData(context) {
    //we use params.id with context because we are using asyncData
    //then the promise from axios
    return axios.get("https://my-blog-project-48a6f-default-rtdb.firebaseio.com/posts/" + context.params.id + ".json")
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  },

  head: {
    title: 'A blog Post'
  }
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
  border: solid rgb(228, 228, 228) 1px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.post-container {
  text-align: left;
  padding: 1rem;
  box-shadow: -1px 1px 15px -4px rgba(0,0,0,0.3);
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;


  }

  .post-feedback {
    width: 600px;
    border-radius: 10px;




  }
}

.post-title {
  margin: 0;
  font-size: 2rem

}

.post-details {

  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;

}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);

}

.post-feedback {
  /* border: solid red 1px; */
  margin: 1rem 0;
  border-radius: 10px;
  margin: 0 auto;
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
