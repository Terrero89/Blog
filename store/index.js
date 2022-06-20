import Vuex from 'vuex'

const createStore = () => {

  //is like this because it communicates with node js

  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {   //payload is == posts
        state.loadedPosts = posts
      }
    },
    actions: {

      // nuxtServer init

      nuxtServerInit(vuexContext, context) {

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            //code to let nuxt init that we are running client code or server code.
            if(!process.client){
                console.log(context.req.session)
            }
            vuexContext.commit('setPosts', [
              {
                id: "1",
                title: "Golang, the special C++",
                previewText: "golang is an amazing language because...",
                thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              },
              {
                id: "2",
                title: "Python, the future of programming",
                previewText: "Python is an amazing language because...",
                thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
              }
            ])
            resolve();
          }, 1000)
        })
      },
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
