<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>

    <!-- main data should be retrieve from index, as in vue from app.vue -->
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
  // asyncData will be efficient to bring the client page full, when pages loads
  // it returns a javascript object for the user to load, if is an array, needs to be changed to an object.
  // for this example, we wrap an object over our array
  //we can add a callback to stop the asyncData prop and let it know that is done.
  // we can add two arguments to the asyncData => context, callback, instead of executing return, will have the same
  // callback method, and pass an error or null,second arguments is the JS data, in this case, the POSTLIST

  asyncData(context, callback) {
    console.log("async data working...") //?CODE IS EXECUTED IN SERVER SIDE WHEN NEEDED, AND IN THE CLIENT SIDE.
     console.log(context)
    setTimeout(() => {
      // return { // removed because we are using the callback function
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "Golang, the special C++",
            previewText: "golang is an amazing language because...",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          },
          {
            id: "2",
            title: "Python, the future of programming",
            previewText: "Python is an amazing language because...",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          },
        ],
      });
    }, 1500);
  },
  //?: data will not work also, because we need to retrieve the info from the server.
  //?: it will not do it on time for crawlers to check the page.
  // data() {
  //     return {
  // will be the main data source for the app.
  // contains info, that will be passed to the prop array :posts
  //         loadedPosts: [

  //         ],
  //     }
  // },

  //?: to simulate backend/request behavior to a server when retrieving the data.
  //?:created will not help in loading the data on the serve, just on the client side.
  // created() {
  //!PREVIOUS POSTS LIST WAS HERE.
  // }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
