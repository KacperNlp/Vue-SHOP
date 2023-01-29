<template>
  <header class="header" :class="{ 'header-scroll': isScrollActive }">
    <div class="header-content">
      <router-link to="/" class="header-logo">VueShop</router-link>
      <button
        class="navigation-bars"
        :class="{ 'is-active': isNavigationActive }"
        @click="handleVisibilityOfNavigation"
      >
        <span></span>
      </button>
      <nav class="navigation" :class="{ 'is-active': isNavigationActive }">
        <ul class="navigation-list">
          <li class="navigation-list-element">
            <router-link to="/" @click="handleVisibilityOfNavigation"
              >Home</router-link
            >
          </li>
          <li class="navigation-list-element">
            <router-link to="/shop" @click="handleVisibilityOfNavigation"
              >Shop</router-link
            >
          </li>
          <li class="navigation-list-element">
            <router-link to="/cart" @click="handleVisibilityOfNavigation"
              >Cart</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
const BREAK_POINT_FOR_NAV_SCROLL = 20;

export default {
  name: "TheHeader",
  data() {
    return {
      isNavigationActive: false,
      isScrollActive: false,
    };
  },

  methods: {
    handleVisibilityOfNavigation() {
      this.isNavigationActive = !this.isNavigationActive;
    },

    onScroll() {
      const { scrollY } = window;

      if (scrollY > BREAK_POINT_FOR_NAV_SCROLL) {
        this.isScrollActive = true;
      } else {
        this.isScrollActive = false;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang="scss">
body:has(.is-active) {
  overflow: hidden;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid transparent;
  background: rgba(255, 255, 255, 0.65);
  z-index: 10;

  &.header-scroll {
    border-bottom: 1px solid #ddd;
    background: #fff;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }

  &-logo {
    color: #3fb984;
    font-size: 28px;
    font-weight: 600;
  }

  .navigation-bars {
    position: relative;
    width: 30px;
    height: 28px;
    outline: none;
    border: none;
    background: inherit;
    overflow: hidden;
    z-index: 10;

    @media (min-width: 568px) {
      display: none;
    }

    span {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background: #000;
      transition: 0.3s;
    }

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: #000;
      transition: 0.3s;
      transform-origin: center left;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      top: 100%;
      left: 0;
      transform: translateY(-1px);
    }

    &.is-active {
      span {
        left: -105%;
      }

      &::before {
        transform: translate(2px, 4px) rotate(45deg);
      }

      &::after {
        transform: translate(3px, -3px) rotate(-45deg);
      }
    }
  }
}

.navigation {
  position: fixed;
  top: 0;
  left: -110%;
  transition: 0.6s;
  width: 100%;
  height: 100vh;
  padding: 70px 20px 20px;
  background: #fff;

  @media (min-width: 568px) {
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 0;
    background: transparent;
  }

  &.is-active {
    left: 0;
  }

  &-list {
    display: flex;
    flex-direction: column;
    grid-gap: 30px;

    @media (min-width: 568px) {
      flex-direction: row;
    }

    &-element {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;

      @media (min-width: 568px) {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }

  a:hover {
    color: #3fb984;
  }

  .router-link-active {
    color: #3fb984;
  }
}
</style>
