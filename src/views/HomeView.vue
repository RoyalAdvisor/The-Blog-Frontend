<template>
  <section class="home">
    <div class="overlay"></div>
    <header class="home-header">
      <h1>The Anything Blog.</h1>
    </header>
    <div class="home-banner">
      <div class="mobile-banner-menu">
        <div class="menu">
          <div class="bar"></div>
        </div>
      </div>
      <div class="banner-search">
        <h2>Search</h2>
        <input type="text" name="search" placeholder="Search posts" />
      </div>
    </div>
  </section>
  <div class="home-description">
    <h2>
      Welcome to The Anything Blog. A blogging platform built by young
      developers with a passion for the new age culture.
    </h2>
    <div class="featured">
      <header class="featured-header">
        <h2>Featured Blogs</h2>
      </header>
      <div class="blog-posts">
        <div class="posts"></div>
        <div class="posts"></div>
        <div class="posts"></div>
      </div>
    </div>
    <div class="catergory">
      <header class="catergory-header">
        <h2>Catergory</h2>
      </header>
      <div class="catergory-container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
  <Contact />
</template>

<script>
import Contact from "@/components/Contact.vue";
export default {
  name: "HomeView",
  components: {
    Contact,
  },
};
</script>
<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  background-image: url("../assets/the-anything-blog.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.overlay {
  position: absolute;
  width: 100%;
  min-height: 80vh;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.home-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.home-header h1 {
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  color: #fff;
  z-index: 1;
}
.home-banner {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  min-height: 50px;
  background-color: #130f40;
}
.banner-search {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
}
.banner-search {
  font-size: 10px;
  font-weight: 400;
  color: #1f1f1f;
}
.banner-search input {
  border: none;
  outline: none;
  border-radius: 3px;
  min-width: 200px;
  padding: 5px;
  color: #1f1f1f;
  text-align: center;
  box-shadow: 0px 4px 4px 0px #130f40;
}
.banner-search input::placeholder {
  font-weight: 700;
  font-size: 12px;
}
.banner-search h2 {
  color: #fff;
}
.home-description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
}
.home-description h2 {
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 48px;
  font-weight: 700;
  padding: 0;
  color: #1f1f1f;
  text-align: center;
}
.featured,
.catergory {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
}
.featured-header,
.catergory-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.featured-header h2,
.catergory-header h2 {
  width: 80%;
  font-size: 32px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  color: #1f1f1f;
  text-align: center;
}
.blog-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 1.5rem;
}
.posts {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 250px;
  background-color: #cdcdcd;
}
.catergory-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 300px;
  gap: 1.5rem;
  width: 80%;
  margin-bottom: 5rem;
}
.item {
  background-color: #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.item > p {
  width: 90%;
}
@media screen and (max-width: 1100px) {
  .home-description h2 {
    text-align: center;
    font-size: 40px;
  }
  .home-description {
    gap: 1rem;
  }
}
@media screen and (max-width: 800px) {
  .featured-header h2,
  .catergory-header h2 {
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    color: #1f1f1f;
    text-align: center;
    margin: 0;
  }
  .home-description h2 {
    width: 95%;
  }
  .blog-posts,
  .catergory-container {
    width: 95%;
  }
  .catergory-container {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(300px, auto);
  }
  .blog-posts {
    flex-direction: column;
  }
  .posts {
    width: 100%;
    height: 300px;
  }
}
@media screen and (max-width: 600px) {
  .home-header h1 {
    font-size: 40px;
  }
  .home-description h2 {
    text-align: center;
    font-size: 28px;
    margin-top: 2rem;
    margin-bottom: 0;
    width: 95%;
  }
  .banner-search {
    width: 100%;
    justify-content: center;
  }
  .banner-search input {
    min-width: 100px;
    gap: 1.5rem;
  }
  .banner-search h2 {
    font-size: 12px;
  }
  .featured-header h2,
  .catergory-header h2 {
    margin: 0;
  }
}
</style>
