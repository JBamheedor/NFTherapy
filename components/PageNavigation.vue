<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="nav-wrapper">
      <div class="navbar-brand">
        <div class="img-wrapper">
          <nuxt-link exact to="/" class="home-link">
            <img src="~/static/icons/home-tree-white.svg">
            <span class="home-text">Home</span>
          </nuxt-link>
        </div>
      
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />        
        </a>
      </div>
      <div id="navbarMain" class="navbar-menu">
        <ul class="menu-wrapper">
          <li class="sub-menu-parent" tab-index="0">
            <span class="sub-menu-title">About</span>
            <nuxt-link to="/about" class="navbar-item -about">
              About
            </nuxt-link>
            <ul class="sub-menu">
              <li class="sub-menu-list">
                <nuxt-link to="/about#meet-your-guide" class="navbar-sub-item">
                  your Guide
                </nuxt-link>
              </li>
              <li class="sub-menu-list">
                <nuxt-link to="/about#faqs" class="navbar-sub-item">
                  Faqs
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="navbar-list">
            <nuxt-link to="/walks" class="navbar-item -walks">
              Walks
            </nuxt-link>
          </li>
          <li class="navbar-list">
            <nuxt-link to="/resources" class="navbar-item">
              Resources
            </nuxt-link>
          </li>
          <li class="navbar-list">
            <nuxt-link to="/contact" class="navbar-item -contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
        <div class="navbar-menu__social">
          <a href="https://www.facebook.com/foresttherapynashville/"><img class="social" src="/icons/001-facebook.svg" alt="facebook icon"></a>
          <a href="https://www.instagram.com/forest_therapy_nashville"><img class="social" src="/icons/002-instagram.svg" alt="instagram icon"></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted: function() {
    const navbar = document.body.querySelector('.navbar')
    const menuItems = document.body.querySelectorAll('.navbar-item')
    const navMenu = document.body.querySelector('.navbar-menu')
    const navBurger = document.body.querySelector('.navbar-burger')
    const homeLink = document.body.querySelector('.home-link')
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )

    window.addEventListener('scroll', function(e) {
      const scrollPos = window.scrollY
      if (scrollPos > 100) {
        navbar.classList.add('-scrolled')
      } else {
        navbar.classList.remove('-scrolled')
      }
    })

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
          navbar.classList.toggle('-open')
        })
      })
    }

    for (const item of menuItems) {
      item.addEventListener('click', () => {
        navbar.classList.remove('-open')
        navMenu.classList.remove('is-active')
        navBurger.classList.remove('is-active')
      })
    }

    homeLink.addEventListener('click', () => {
      navbar.classList.remove('-open')
      navMenu.classList.remove('is-active')
      navBurger.classList.remove('is-active')
    })

    window.addEventListener('resize', function(e) {
      if (window.innerWidth >= 1088) {
        navbar.classList.remove('-open')
        navMenu.classList.remove('is-active')
        navBurger.classList.remove('is-active')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  background-color: $primary-green;
  padding: 0 2rem;
  position: fixed;
  width: 100%;
  -webkit-box-shadow: 0px 1px 1px $primary-green;
  -moz-box-shadow: 0px 1px 1px $primary-green;
  box-shadow: 0px 1px 1px $primary-green;
  z-index: 100001;

  .navbar-burger {
    color: white;
  }

  // Full page open effect
  .nav-wrapper {
    height: 0;
    transition: all 0.5s ease-in-out;
  }

  &.-open {
    .nav-wrapper {
      height: 100vh;
      opacity: 1;
      visibility: visible;
      transition: all 0.5s ease-in-out;
    }
  }

  // Home icon & animation
  .navbar-brand {
    .home-link {
      align-self: center;
      display: flex;
    }

    img {
      height: 3.5rem;
      padding: 0.3rem 1rem 0.4rem 0;
    }

    .home-text {
      display: inline-flex;
      align-items: center;
      color: white;
      text-transform: uppercase;
      font-family: $heading-font;
      position: relative;
      left: -43px;
      opacity: -1;
      transition: all 0.25s ease-in-out;
    }

    .img-wrapper:hover .home-text {
      left: 0;
      opacity: 1;
      transition: all 0.4s ease-in-out;
    }
  }

  //Background color change
  &.-scrolled,
  &.-open {
    background: rgba(80, 118, 110, 0.9);
    box-shadow: 0px 1px 1px rgba(80, 118, 110, 0.9);
    transition: all 0.75s ease-in-out;
  }

  //General nav item styling and effect
  .navbar-item {
    color: white;
    font-family: $heading-font;
    font-size: 1rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    padding: 0 0 0.5rem;
    margin: 0 auto 1rem;
    display: table;

    &:hover,
    &:active {
      background: transparent;
      color: white;
      text-shadow: 0 0 0.01px white;
    }

    // Hover effect
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
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

    &:nth-of-type(1) {
      margin-top: 0;
    }
  }

  // Inner nav menu
  .navbar-menu {
    justify-content: space-between;
    box-shadow: none;
    background: none;
    height: 75%;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
    display: block;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .sub-menu-parent {
      .sub-menu-title {
        display: none;
      }
      .sub-menu {
        display: none;

        .navbar-sub-item {
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          text-decoration: none;
          text-transform: uppercase;
          position: relative;
          padding: 0 0 0.5rem;
          margin: 0 auto 1rem;
          display: table;
        }
      }
    }

    &__social {
      width: 5rem;
      display: flex;
      justify-content: space-around;

      .social {
        height: 1.5rem;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .navbar-item-inner {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 300;
      color: white;
    }
  }
}

// When mobile nav is open

.navbar.-open {
  .navbar-menu {
    padding-top: 3rem;
    justify-content: space-between;
    box-shadow: none;
    background: none;
    height: 75%;
    transition: all 0.3s ease-in-out;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    visibility: visible;
    display: flex;
  }
}

@media only screen and (min-width: 1088px) {
  .navbar {
    .nav-wrapper {
      min-height: 3.25rem;
      display: flex;
      justify-content: space-between;
      width: 100%;

      .navbar-menu {
        padding-top: 0;
        visibility: visible;
        opacity: 1;
        height: auto;
        transition: none;
      }

      .navbar-list {
        display: flex;
        align-items: center;
      }

      .navbar-item {
        margin: 0 1rem;
        padding-bottom: 0.3rem;
      }

      .navbar-menu__social {
        display: none;
      }

      .menu-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;

        // Dropdown effects/ styles
        .sub-menu-parent {
          text-align: center;
          height: 52px;
          line-height: 47px;
          text-transform: uppercase;
          color: white;
          position: relative;
          font-family: $heading-font;

          .-about {
            display: none;
          }

          .sub-menu-title {
            margin: 0 1rem;
            display: list-item !important;
          }
          .sub-menu {
            display: block;
            visibility: hidden;
            opacity: 0;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            transform: translateY(-2em);
            z-index: -1;
            transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
              z-index 0s linear 0.01s;
            width: 130px;
            position: absolute;
            background: $primary-green;
            left: -20px;

            .sub-menu-list {
              display: flex;
              justify-content: center;
            }

            .navbar-sub-item {
              padding: 0;
              margin: 0;
            }
          }
        }

        .sub-menu-parent:focus .sub-menu,
        .sub-menu-parent:focus-within .sub-menu,
        .sub-menu-parent:hover .sub-menu {
          visibility: visible;
          opacity: 1;
          z-index: 1;
          transform: translateY(0%);
          transition-delay: 0s, 0s, 0.3s;
        }
      }
    }
  }

  // Styles when page scrolled at breakpoint
  .navbar.-scrolled {
    .sub-menu {
      background-color: rgba(80, 118, 110, 0.9) !important;
    }
  }
}
</style>
