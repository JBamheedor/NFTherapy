<template>
  <div class="all-content">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~/assets/icons/home-tree.svg">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />        
        </a>
      </div>
      <div id="navbarMain" class="navbar-menu">
        <div class="navbar-end">
          <a href="/about" class="navbar-item">
            About
          </a>
          <a href="/walks" class="navbar-item">
            Walks
          </a>
          <a href="/resources" class="navbar-item">
            Resources
          </a>
          <a href="/contact" class="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer class="footer" role="footer">
      <div class="footer__container">
        <div class="footer__content">
          <p class="has-text-light">ksksjsk</p>
        </div>
      </div>
    </footer>
    <div class="rights has-background-light	">
      <p>
        &copy; {{ getYear }} Nashville Forest Therapy All Rights Reserved
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: ''
    }
  },
  computed: {
    getYear: function() {
      console.log('rr')
      return new Date().getFullYear()
    }
  },
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


<style scoped lang="scss">
.navbar {
  // margin: 0 2rem;
  .navbar-menu {
    .navbar-item {
      color: #4a2619;
      font-family: dala;
      font-size: 1.5rem;
      &:hover {
        background-color: #4a2619;
        color: white;
      }
    }
  }
}
.footer {
  background-color: $primary-green;
  flex-shrink: 0;
}
.rights {
  font-size: 0.8rem;
  // position: fixed;
  // left: 0;
  // bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
}
</style>
