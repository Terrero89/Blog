<template>
  <div class="about-page">


    <div class="about-intro">
      <div class="about-text">

        <span>Hi My name is</span>
        <h1>Sergio Terrero</h1>
        <h2>Welcome to my personal web blog.</h2>
      </div>


    </div>

    <div class="about-desc">
      <div class="about-content">
        <h1>About me</h1>
        <p>My name is Sergio Terrero, Im' a <span style="color:blue">Front-end Developer</span> originally from
          Dominican Republic,living in Massachusetts. I created this blog to show my journey, my thoughts and how i feel about programming in general.  </p>

          <p>I found my passion for programming while taking a class of C in college. Although the
          class was tough,
          I liked the challenge, the uncertainty, and the abstraction behind building programs and software.</p>
        <p>I really like to enjoy life as much as possible doing those things that recharge my energy, that's why i will
          often go to camping, hiking, traveling and (my favorite) road trips. I like to explore, and go to different
          places, i feel that gives me different perspective and better way to think and approach things in general</p>
        <p>Enough from me, if want to know more follow me in the different social media platforms below.</p>

      </div>
    </div>
  </div>
</template>

<style scoped>
.about-intro {
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://ggwash.org/images/posts/200912-bostonkeybus.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;

}

.about-intro .about-text {
    color: rgb(238, 238, 238);
  margin: auto 0;

}

.about-intro .about-text h1 {
  color: rgb(238, 238, 238);
  font-size: 5rem;
  letter-spacing: .02rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}

.about-intro .about-text h2 {
  color: rgb(238, 238, 238);
  font-size: 2rem;

  font-weight: 700;

}

.about-desc .about-content {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  /* border: solid red; */


}
.about-content p{
  line-height: 1.5rem;
}
</style>
