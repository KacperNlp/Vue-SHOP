<template>
  <header class="header">
    <nav class="navigation">
      <ul class="navigation-list">
        <li class="navigation-list-element">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation-list-element">
          <router-link to="/shop">Shop</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
};
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.navigation {
  &-list {
    display: flex;
    grid-gap: 40px;
  }
}
</style>
