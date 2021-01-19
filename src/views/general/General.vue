<template>
  <t-main-container title="General" note="Website Global Setting">
    <site></site>
    <upload></upload>
    <email></email>
    <custom></custom>
  </t-main-container>
</template>
<script>
import site from './components/site'
import upload from './components/upload'
import email from './components/email'
import custom from './components/custom'
export default {
  components: {
    site,
    upload,
    email,
    custom
  }
}
</script>
