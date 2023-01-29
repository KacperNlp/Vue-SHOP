<template>
  <section-banner></section-banner>
  <section-center>
    <section-slider>
      <template #slider-headline>
        <base-headline headlinePosition="left"
          ><h2>Special Offer!</h2></base-headline
        >
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
  components: { SectionBanner, SectionCenter, SectionSlider, BaseHeadline },
};
</script>
<style></style>
