<template>
  <div class="section-center">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SectionCenter",
};
</script>
<style lang="scss" scoped>
.section-center {
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;

  @media (min-wdith: 1300px) {
    width: 100%;
  }
}
</style>
