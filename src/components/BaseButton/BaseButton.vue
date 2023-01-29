<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "BaseButton",
};
</script>
<style lang="scss">
.button {
  padding: 10px;
  border: 1px solid #3fb984;
  background: #3fb984;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: #3fb984;
    cursor: pointer;
  }
}
</style>
