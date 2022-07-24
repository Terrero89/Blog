<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>

    </div>
    <div class="middle">
       <nuxt-link class="home" to="/">Go home</nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin');
      });
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container{
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.home{
  align-items: center;
  width: 2rem;
  text-decoration: none;
  color: black;

}
.middle{
  width: 5rem;
  margin: 1rem auto;
  border: solid rgb(68, 68, 68) 1px;
  border-radius: 5px;
  padding: 5px 10px;
}

.middle :hover{
  color: rgb(109, 109, 109);
  transition:0.8s;
}
a .nuxt-link:hover{
  color: rgb(0, 0, 0);
}
</style>
