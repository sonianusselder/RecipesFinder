<template>
  <header class="header">
    <div class="logoContainer">
      <img class="logo" src="@/assets/img/soniaanubis.png" />
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  name: "HeaderEl",
  data() {
    return {
      // title: 'Spread the message'
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/mixins.scss";

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoContainer {
  width: 30%;
  padding: 20px 20px;
}

.logo {
  width: 100%;
}
</style>
