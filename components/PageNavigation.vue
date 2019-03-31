<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/">
        <img src="~/static/icons/home-tree-white.svg">
      </nuxt-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />        
      </a>
    </div>
    <div id="navbarMain" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
        <nuxt-link to="/walks" class="navbar-item">
          Walks
        </nuxt-link>
        <nuxt-link to="/resources" class="navbar-item">
          Resources
        </nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">
          Contact
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted: function() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $primary-green;
  padding: 0 2rem;
  .navbar-burger {
    color: white;
  }
  .navbar-brand {
    img {
      height: 50px;
      padding-top: 6px;
    }
  }
  .navbar-menu {
    box-shadow: none;
    background: none;
    .navbar-item {
      color: white;
      font-family: $heading-font;
      font-size: 1.5rem;
      text-decoration: none;
      position: relative;
      margin: 0 5px;
      &:hover,
      &:active {
        background-color: $dark-green;
        color: white;
      }
      // Hover effect
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 5px;
        left: 0;
        background-color: white;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
      &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
    &.is-active {
      .navbar-item {
        display: table;
        margin: 0 auto;
      }
    }
  }
}
</style>
