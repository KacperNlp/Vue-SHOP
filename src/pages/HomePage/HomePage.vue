<template>
  <section-banner>
    <template #banner-content>
      <div class="home-banner-content">
        <h1 class="home-banner-content-headline">CarShop</h1>
        <p class="home-banner-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          corrupti.
        </p>
      </div>
    </template>
  </section-banner>
  <section-center>
    <section-slider :products="products">
      <template #slider-headline>
        <base-headline><h2>Special Offer!</h2></base-headline>
      </template>
    </section-slider>
  </section-center>
</template>
<script>
import SectionBanner from "@/sections/SectionBanner/SectionBanner.vue";
import SectionCenter from "@/sections/SectionCenter/SectionCenter.vue";
import SectionSlider from "@/sections/SectionSlider/SectionSlider.vue";

import BaseHeadline from "@/components/BaseHeadline/BaseHeadline.vue";

export default {
  name: "HomePage",
  components: {
    SectionBanner,
    SectionCenter,
    SectionSlider,
    BaseHeadline,
  },

  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
<style lang="scss">
.home-banner-content {
  position: absolute;
  bottom: 50px;
  left: 30px;
  width: 90%;
  max-width: 300px;
  color: #fff;
  text-align: left;
  line-height: 180%;

  &::before {
    position: absolute;
    top: -30px;
    left: -30px;
    content: "";
    width: 150%;
    height: 150%;
    background: rgba(0, 0, 0, 0.3);

    @media (min-width: 1024px) {
      top: -40px;
      left: -40px;
      width: 200%;
      height: 200%;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
    }
  }

  @media (min-width: 1024px) {
    bottom: 250px;
    left: 100px;
  }

  @media (min-width: 1440px) {
    bottom: 300px;
    left: 150px;
    max-width: 400px;
  }

  &-headline {
    position: relative;
    margin-bottom: 15px;
    font-weight: 100;
    font-size: 28px;
    color: #3fb984;
    z-index: 1;

    @media (min-width: 1024px) {
      font-size: 46px;
      letter-spacing: 1px;
      margin-bottom: 25px;
    }

    @media (min-width: 1440px) {
      font-size: 65px;
      margin-bottom: 35px;
    }
  }

  &-text {
    position: relative;
    z-index: 1;

    @media (min-width: 1440px) {
      font-size: 20px;
    }
  }
}
</style>
