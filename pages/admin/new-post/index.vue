<template>
<!-- admin new post page -->
<div class="admin-new-post-page">
    <section class="new-post-form">
        <!-- form for admin specifically -->
        <AdminPostForm @submit="onSubmit" />
    </section>
</div>
</template>

<script>
import axios from 'axios'


export default {
    layout: 'admin',
 

    //method used to post the blog post
    //sent ...postData to send them all in an object with updateDate with new data
    methods: {
        onSubmit(postData) {
            this.$store.dispatch("addPost", postData).then(() => {
                this.$router.push("/admin");
            });

        }
    },
};
</script>

<style scoped>
.new-post-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .new-post-form {
        width: 500px;
    }
}
</style>
