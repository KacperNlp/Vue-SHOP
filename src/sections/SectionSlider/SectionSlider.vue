<template>
  <div>
    <slot name="slider-headline"></slot>
    <ul class="products-list">
      <li
        class="products-list-element"
        v-for="product in products"
        :key="product.id"
      >
        <base-card
          :name="product.name"
          :price="product.price"
          :imgSrc="product.imgSrc"
          :imgAlt="product.imgAlt"
          :id="product.id"
        ></base-card>
      </li>
    </ul>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseCard/BaseCard.vue";

export default {
  name: "SectionSlider",
  components: { BaseCard },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-gap: 30px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    grid-gap: 0;
  }
}
</style>
