<template>
  <div class="banner">
    <div class="banner-img">
      <img
        src="../../assets/home-banner-1280.jpg"
        alt="Cars shop banner desktop"
        v-if="isDesktopActive"
      />
      <img
        src="../../assets/home-banner-640.jpg"
        alt="Cars shop banner mobile"
        v-else
      />
    </div>
  </div>
</template>
<script>
const SCREEN_BREAK_POINT_TO_SWITCH_SCREEN = 1024;

export default {
  name: "SectionBanner",
  data() {
    return {
      isDesktopActive: false,
    };
  },

  methods: {
    switchBannerImg() {
      const { width } = window.screen;
      console.log(width);

      if (width >= SCREEN_BREAK_POINT_TO_SWITCH_SCREEN) {
        this.isDesktopActive = true;
      } else {
        this.isDesktopActive = false;
      }
    },
  },

  mounted() {
    this.switchBannerImg();
    window.addEventListener("resize", this.switchBannerImg);
  },
};
</script>
<style lang="scss">
.banner {
  width: 100%;
  height: 40vh;

  @media (min-width: 1024px) {
    height: 90vh;
  }

  .banner-img {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
