<template>
  <footer class="footer" role="footer">
    <img class="bi" src="/icons/tree-footer.svg" alt="">
    <div class="footer__container max">
      <div class="columns footer__columns has-text-light">
        <div class="column">
          <ul>
            <li>
              <nuxt-link to="/" class="footer-navbar-item">
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" class="footer-navbar-item">
                About
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/walks" class="footer-navbar-item">
                Walks
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/resources" class="footer-navbar-item">
                Resources
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="footer-navbar-item">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="column contact-col">
          <address class="contact">
            <a class="email footer-navbar-item" href="mailto:contact@nashvilleforesttherapy.com">contact@nashvilleforesttherapy.com</a><br>
            <a class="phone footer-navbar-item" href="tel:1-615-477-4294">+1 (615) 477 4294</a>
          </address>
        </div>
        <div class="column">
          <div class="socials">
            <!-- TODO: add links -->
            <a href=""><img src="~/static/icons/facebook-logo-button.svg" alt="Facebook Link"></a>
            <a href=""><img src="~/static/icons/instagram-logo.svg" alt="Instagram Link"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="rights">
      <p class="has-text-light">
        &copy; {{ getYear }} Nashville Forest Therapy All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getYear: function() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.bi {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  height: inherit;
}
.footer {
  position: relative;
  overflow: hidden;
  height: 100%;
  padding: 1rem 1.5rem 0 !important;
  background-color: $primary-green;
  flex-shrink: 0;
  &__container {
    position: relative;
    z-index: 1;
  }
  &__columns {
    text-align: center;
    padding: 1rem 0;
    .contact-col {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      .contact {
        font-style: normal;
      }
    }
    .column {
      .footer-navbar-item {
        font-family: $heading-font;
        font-size: 1.2rem;
        color: white;
        &:hover,
        &:active {
          color: $primary-brown;
        }
      }
      .contact-header {
        font-family: $heading-font;
        font-size: 1.2rem;
        color: white;
      }
      .socials {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        img {
          height: 2.5rem;
          transition: all 0.2s ease-in-out;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .tree-icon {
        img {
          height: 150px;
        }
      }
    }
  }
  .rights {
    font-size: 0.8rem;
    text-align: center;
  }
}
</style>
