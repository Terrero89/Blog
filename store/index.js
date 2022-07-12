import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {

  //is like this because it communicates with node js

  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {   //payload is == posts
        state.loadedPosts = posts
      },
      addPost(state, post) {
        //we only push the loadedPosts post to the array
        state.loadedPosts.push(post)
      },
      //to edit posts from the store
      editPost(state, editedPost) {
        //find it by index
        //if in loadedPosts we find an index accepts posts as an arguments  and return
        //posts.id that is equal the id from editedPost.id
        const postIndex = state.loadedPosts.findIndex(posts => posts.id === editedPost.id)
        //we initialize state.loadedPiosts with the found Index, and we replace it with the edited Post
        state.loadedPosts[postIndex] = editedPost
      },
    },


    actions: {

      // nuxtServer init
      // nuxt init works as the main way to interact with nuxt server
      nuxtServerInit(vuexContext, context) {
        //? using axios
        return axios.get("https://my-blog-project-48a6f-default-rtdb.firebaseio.com/posts.json")
          .then(res => {
            //?conver data into an array
            // array of objects to stract or read data
            const postArray = []
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key })
            }
            //?then commit the data entering in the store.
            vuexContext.commit('setPosts', postArray)
          })
          .catch(e => context.error(e))
      },



      addPost(vuexContext, post) {

        //created object to store posts.

        const createdPost = {
          ...post,
          updatedDate: new Date()
        }

        return axios
        .post("https://my-blog-project-48a6f-default-rtdb.firebaseio.com/posts.json", createdPost)
        .then(result => {
          vuexContext.commit('addPost', {...createdPost, id: result.data.name})
        })
          .catch(e => console.log(e))



      },

      //editedPost === payload... editedPost is the element from teh array of the edited post
      editPost(vuexContext, editedPost) {
       return axios.put("https://my-blog-project-48a6f-default-rtdb.firebaseio.com/posts/" +
        editedPost.id + ".json", editedPost)
        .then(res => {
         //we will update the id that we want to update.

         vuexContext.commit('editPost', editedPost)

        })
        .catch(e => console.log(e))


      },
      //ACTION TO POST THE BLOG POST
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },

    },


    getters: {
      loadedPosts(state) {
        return state.loadedPosts    //return the entire state of the loadedPosts array
      }

    },
  })


}


export default createStore




