<template>
  <div id="app">
    <header-el></header-el>
    <main>
      <!-- <div id="sock">
        <img src="@/assets/img/muis.png" width="80" />
      </div>-->
      <router-view></router-view>
    </main>
    <footer>
      <p>
        Developed by
        <a href="http://sonian.nl" target="_blank">Sonia Nusselder</a>
      </p>
    </footer>
  </div>
</template>

<script>
import HeaderEl from "@/components/HeaderEl";

export default {
  name: "app",
  components: {
    HeaderEl
  }
};
</script>

<style lang="scss">
@import "assets/SCSS/mixins.scss";

@font-face {
  font-family: "swagfont";
  src: url("assets/font/HelveticaNeue-CondensedBold.eot");
  src: url("assets/font/HelveticaNeue-CondensedBold.eot?#iefix")
      format("embedded-opentype"),
    url("assets/font/HelveticaNeue-CondensedBold.woff2") format("woff2"),
    url("assets/font/HelveticaNeue-CondensedBold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

.left {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.right {
  -moz-transform: scaleX(1);
  -o-transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

#sock {
  z-index: 100;
  transition: transform 0.1s;
}

body {
  margin: 0;
  background-color: #8400ff; /* For browsers that do not support gradients */
  color: white;
  background-image: linear-gradient(to bottom right, #ff3000, #8400ff);
  font-family: "Arial Black", Gadget, sans-serif;
  font-family: "swagfont", Gadget, sans-serif !important;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    color: white;

    main {
      margin: 0 auto;
    }

    footer {
      padding: 4rem 0;
      text-align: center;

      a,
      p {
        font-size: 1rem !important;
      }
    }
  }
}
</style>
