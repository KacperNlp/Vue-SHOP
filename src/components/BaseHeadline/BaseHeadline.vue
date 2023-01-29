<template>
  <div class="base-headline" :class="headlinePosition">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BaseHeadline",
  props: {
    //we can use here lefr, right and center
    headlinePosition: {
      type: String,
      default: "center",
    },
  },
};
</script>
<style lang="scss">
.base-headline {
  display: flex;
  align-items: center;

  &.center {
    justify-content: center;
  }

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 22px;
    font-weight: 600;
    margin: 20px 0;

    @media (min-width: 568px) {
      font-size: 28px;
    }

    @media (min-width: 1024px) {
      font-size: 34px;
    }
  }
}
</style>
