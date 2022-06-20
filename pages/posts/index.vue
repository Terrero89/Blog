<template>
<div class="posts-page">
    <PostList :posts="loadedPosts" />
</div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
    components: {
        PostList,
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // simulation of a server response
                // callback(new Error, { //? FOR HANDLING EROR IN PAGES
                resolve({    // instead of callback(null, { , we resolve since is a promise
                    //data i want to return.
                    loadedPosts: [{
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
                        },
                    ],
                });
            }, 1000);

        })
        .then(data=>{
          return data;
        })
        .catch(e => {
            context.error(new Error())
        }) //?TO RETURN THE DESIRED ERROR IF SOMETHING HAPPENS WITH THE PROMISE ON THE SERVE

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
