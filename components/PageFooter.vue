<template>
  <footer class="footer" role="footer">
    <img class="background-tree" src="/icons/tree-footer.svg" alt="tree image as decorative background">
    <div class="footer__container max">
      <div class="contact">
        <address>
          <a class="email footer-navbar-item" href="mailto:connect@foresttherapynashville.com">connect@foresttherapynashville.com</a>
        </address>
      </div>
      <div class="footer__socials">
        <a href="https://www.facebook.com/foresttherapynashville/"><img class="social" src="/icons/001-facebook.svg" alt="facebook icon"></a>
        <a href="https://www.instagram.com/forest_therapy_nashville"><img class="social" src="/icons/002-instagram.svg" alt="instagram icon"></a>
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
.background-tree {
  position: absolute;
  top: 55%;
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
  background-color: $footer-green;
  flex-shrink: 0;

  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;

    .footer__socials {
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

    .contact {
      text-align: center;
      padding: 1rem 0;

      address {
        font-size: 1.2rem;
        font-style: normal;
        display: flex;
        flex-direction: column;

        .phone {
          padding-top: 1rem;
        }
      }

      .divider {
        display: none;
      }
    }
  }

  &-navbar-item {
    color: white;
  }

  .rights {
    font-size: 0.8rem;
    text-align: center;
  }
}

@media only screen and (min-width: $mobileLandscape) {
  .footer {
    .contact {
      address {
        flex-direction: row;
        .phone {
          padding-top: 0;
        }
      }

      .divider {
        display: inline;
        padding: 0 0.5rem;
        font-style: normal;
        color: white;
      }
    }
  }
}
</style>
