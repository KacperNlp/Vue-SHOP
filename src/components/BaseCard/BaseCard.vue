<template>
  <div class="card">
    <img class="card-img" :src="imgSrc" :alt="imgAlt" />
    <div class="card-content">
      <p class="card-content-headline">{{ name }}</p>
      <p class="card-content-price">{{ price }} zł</p>
      <base-button>Add to cart!</base-button>
    </div>
  </div>
</template>
<script>
import BaseButton from "../BaseButton/BaseButton.vue";

export default {
  name: "BaseCard",
  components: { BaseButton },

  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.card {
  width: 300px;
  height: 450px;
  border: 1px solid #eee;

  &-img {
    width: 100%;
    height: 200px;
  }

  &-content {
    margin-top: 30px;

    &-headline {
      margin-bottom: 10px;
    }

    &-price {
      font-weight: 600;
    }
  }
}
</style>
