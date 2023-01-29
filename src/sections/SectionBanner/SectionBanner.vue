<template>
  <div class="banner">
    <div class="banner-img">
      <img src="../../assets/home-banner-1280.jpg" alt="Cars shop banner" />
      <!-- <img src="../../assets/home-banner-640.jpg" alt="Cars shop banner" /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionBanner",
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
