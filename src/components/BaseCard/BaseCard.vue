<template>
  <div class="card">
    <slot name="headline"></slot>
    <slot name="body"></slot>
  </div>
</template>
<script>
export default {
  name: "BaseCard",
};
</script>
<style></style>
