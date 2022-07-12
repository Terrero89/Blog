<template>
<div class="admin-post-page">
    <section class="update-form">
        <!-- object that from chil component that will  load up the loaded post in this one by binding it together -->
        <!-- loaded post is a data prop  -->
        <!-- :post is the prop coming from child component-->
        <AdminPostForm :post="loadedPosts" @submit="onSubmit" />
    </section>
</div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },

    //?is going to be postId becase the folder is in, is _postId
    asyncData(context) {

        return axios.get("https://my-blog-project-48a6f-default-rtdb.firebaseio.com/posts/" + context.params.postId + ".json")
            //what ever we return, we need to pass that object to the loadedPosts
            .then(res => {
              //we create a spread array object, because we are using asyncronous code
              //at the time the asyn code finishes, we dont retrieve an elements because we dont have an id yet.
              // we add an id manually so, vuex can check for that id in teh array and retrieve it.
                return {
                    loadedPosts: {...res.data, id: context.params.postId}
                }
            })
            .catch(e => context.error(e))
    },

    methods: {
        //to edit the post
        //the id info is coming from this.$route.params.IDXXX, we are not using context.
        //editedPost as a second argument, means that we will receive it and send the current one to replace the
        //the id that is equal to the one we are sending with a PUT request.
        onSubmit(editedPost) {
            this.$store.dispatch('editPost', editedPost)
                .then(() => {
                    this.$router.push("/admin")
                })
        }
    }
};
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>
