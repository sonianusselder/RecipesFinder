<template>
  <div
    class="block"
    v-bind:class="{'reversed': layout === 'reversed'}"
    :style="{ 'background-color': blockBg, 'color': blockText, }"
  >
    <div class="blockSection blockContent">
      <h2>{{ blockTitle }}</h2>
      <p>{{ blockContent }}</p>
      <slot></slot>
    </div>
    <div v-if="blockImage" class="blockSection blockImageContainer">
      <img class="blockImage" :src="require('@/assets/img/'+blockImage)" />
    </div>
  </div>

  <!-- :style="{ backgroundImage: 'url(' + require('@/assets/img/'+blockImage) + ')' }" -->
</template>

<script>
export default {
  components: {},
  name: "BodyContent",
  props: [
    "blockTitle",
    "blockContent",
    "blockBg",
    "blockText",
    "blockImage",
    "layout"
  ],
  data() {
    return {
      // title: 'Spread the message'
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/mixins.scss";

.block {
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;

  overflow: hidden;

  @include respond-to($tablet-portrait) {
    flex-direction: column;
  }

  .blockSection {
    width: 50%;
    max-height: 600px;
    overflow: hidden;
    @include respond-to($tablet-portrait) {
      max-height: unset;
      width: auto;
      height: auto;
    }
  }

  .blockContent {
    padding: 6rem 4rem;

    @include respond-to($phone) {
      padding: 4rem 2rem;
    }
  }

  .blockImageContainer {
    display: flex;
    justify-content: center;
  }

  .blockImage {
    height: 100%;
    @include respond-to($tablet-portrait) {
      width: 100%;
    }
  }

  &.reversed {
    flex-direction: row-reverse;

    .blockImageContainer {
      justify-content: flex-start;
    }
  }
}
</style>
