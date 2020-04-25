<template>
  <div class="body_content">
    <!-- <preloader></preloader> -->
    <block
      block-text="white"
      block-bg="transparent"
      block-title="Hi! I'm Sonia Anubis."
      block-content="A guitarist, bassist, composer, guitar teacher and passionate wild child who believes in the power of music."
      block-image="sonia-guitar.png"
    />
    <block
      block-text="black"
      block-title="BANDS"
      block-content="I plays guitar in heavy metal bands Burning witches and Cobra spell."
    />
    <block
      block-text="white"
      block-title="SOCIAL CHANNELS"
      block-bg="transparent"
      block-content="I'm very active on socials and upload weekly musical related content on YouTube, Instagram and Facebook. "
      block-image="sonia-playing.gif"
    >
      <div class="socials">
        <a href="https://www.instagram.com/soniaanubis/" target="_blank" class="socialIcon">
          <img src="@/assets/img/ig.png" />
        </a>
        <a href="https://www.youtube.com/soniaanubis" target="_blank" class="socialIcon">
          <img src="@/assets/img/yt.png" />
        </a>
        <a href="https://www.facebook.com/soniaanubis" target="_blank" class="socialIcon">
          <img src="@/assets/img/fb.png" />
        </a>
        <a href="https://www.patreon.com/soniaanubis" target="_blank" class="socialIcon">
          <img src="@/assets/img/pt.png" />
        </a>
      </div>

      <a href="https://soniaanubis.bigcartel.com/" target="_blank" class="socialIcon">
        <h3>I also have a shop!</h3>
      </a>
    </block>
    <block
      block-text="black"
      block-title="GET ONLINE LESSONS WITH SONIA"
      block-content="Available WORLDWIDE for GUITAR / BASS lessons with Skype or in person. Anything music related, session musicianship, solo writing, private guitar / bass lessons adapted to what YOU want to learn."
    />
    <block block-text="white" block-bg="black" block-title="Let's get in touch">
      <a href="mailto:info@soniaanubis.com">info@soniaanubis.com</a>
    </block>
  </div>
</template>

<script>
import Block from "@/components/Block";

export default {
  components: {
    Block
  },
  name: "BodyContent",
  data() {
    return {
      // title: 'Spread the message'
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/SCSS/mixins.scss";
.socials {
  .socialIcon {
    cursor: pointer;
  }
  .socialIcon img {
    height: 50px;
    padding-right: 20px;
  }
}
</style>
