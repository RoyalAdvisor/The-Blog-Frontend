<template>
  <section class="home">
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
        <div class="posts">1</div>
        <div class="posts">2</div>
        <div class="posts">3</div>
      </div>
    </div>
    <div class="catergory">
      <header class="catergory-header">
        <h2>Catergory</h2>
      </header>
      <div class="catergory-container">
        <div class="item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            incidunt fugit doloremque et officiis numquam dolorem eaque,
            excepturi dignissimos molestias ea ipsam omnis. Qui incidunt
            repellendus necessitatibus deserunt mollitia atque quam, porro quas
            quibusdam animi quae excepturi nam unde voluptates quo recusandae
            expedita, praesentium provident suscipit dignissimos nihil fugiat
            ex.
          </p>
        </div>
        <div class="item">
          <p>
            Odit at, tempora alias nobis neque voluptates inventore consequuntur
            delectus incidunt nostrum eveniet reiciendis repellendus obcaecati
            dolores minima amet quasi dicta dignissimos doloremque adipisci
            eligendi expedita. Tempore eos dicta optio cum nobis, culpa
            architecto perspiciatis tenetur neque assumenda at quia
            necessitatibus magnam aliquid numquam quam modi unde consequuntur
            enim sit?
          </p>
        </div>
        <div class="item">
          <p>
            Amet minus voluptas reprehenderit praesentium debitis assumenda eius
            provident, voluptate commodi, necessitatibus possimus officiis enim
            nisi eos aliquid, quas laboriosam ea neque tempore iusto itaque quis
            vel nam. Voluptates, nam officia illum facilis ex ipsum consectetur
            beatae delectus, maxime facere, voluptate molestias voluptatum?
            Quam, tenetur totam molestias vel suscipit sit.
          </p>
        </div>
        <div class="item">
          <p>
            Qui itaque harum eius aperiam iusto placeat? Nisi consequatur fugiat
            sunt quae assumenda, eligendi quia dolores in et ex aperiam at omnis
            vitae eius! Autem, mollitia! Soluta, magni eaque quos nulla autem,
            non animi debitis deserunt, aliquam veritatis provident delectus
            totam alias explicabo vitae quis dolorem id. Quae, amet sit?
          </p>
        </div>
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
  background-color: #cdcdcd;
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
  color: #1f1f1f;
}
.home-banner {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 1.5rem;
  min-height: 50px;
  background-color: #ededed;
}
.banner-search {
  justify-content: center;
  margin-right: 1.5rem;
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
  min-width: 200px;
  padding: 5px;
  color: #1f1f1f;
}
.banner-search input::placeholder {
  font-weight: 700;
  font-size: 12px;
  font-style: italic;
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
  grid-auto-rows: 200px;
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
    grid-auto-rows: auto;
  }
  .blog-posts {
    flex-direction: column;
  }
  .posts {
    width: 100%;
    height: 400px;
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
