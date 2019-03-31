<template>
  <form id="contact-form" action="https://formspree.io/georgia.copeland@gmail.com" method="POST" @submit.prevent="handleSubmit">
    <div class="contact-form-wrapper">
      <div class="field">
        <label class="label" for="name">Name *</label>
        <div class="control">
          <input
            id="name"
            v-model="sender.name"
            v-validate="'required'"
            class="input"
            type="text"
            name="name"
            :class="{ 'is-invalid': submitted && errors.has('name') }"
          >
          <div v-if="submitted && errors.has('name')" class="invalid-feedback has-text-danger">
            {{ errors.first('name') }}
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label" for="phone">Phone</label>
        <div class="control">
          <input id="phone" class="input" type="number" name="phone">
        </div>
      </div>

      <div class="field">
        <label class="label" for="email">Email *</label>
        <div class="control">
          <input
            id="name"
            v-model="sender.email"
            v-validate="'required'"
            class="input"
            type="email"
            name="email"
            :class="{ 'is-invalid': submitted && errors.has('email') }"
          >
          <div v-if="submitted && errors.has('email')" class="invalid-feedback has-text-danger">
            {{ errors.first('email') }}
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label" for="message">Message *</label>
        <div class="control">
          <textarea
            id="message"
            v-model="sender.message"
            v-validate="'required'"
            class="textarea"
            type="text"
            name="message"
            :class="{ 'is-invalid': submitted && errors.has('message') }"
          />
          <div v-if="submitted && errors.has('message')" class="invalid-feedback has-text-danger">
            {{ errors.first('message') }}
          </div>
        </div>
      </div>
      <p class="help">
        * Required
      </p>
      <div class="field button-field">
        <div class="control">
          <button class="button send-button has-text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import VeeValidate from 'vee-validate'

export default {
  data() {
    return {
      sender: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          document.forms['contact-form'].submit()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form-wrapper {
  margin: 4rem auto;
  max-width: 35rem;
  padding: 0 6%;
  input,
  .textarea {
    border-color: $primary-brown;
    font-family: $body-font;
  }
  label,
  button {
    font-family: $heading-font;
    font-size: 1.3rem;
    font-weight: 400;
  }
  .button-field {
    display: flex;
    justify-content: center;
    .send-button {
      background-color: $primary-green;
      border-color: $primary-green;
      &:hover {
        background-color: $dark-green;
      }
    }
  }
}
</style>
