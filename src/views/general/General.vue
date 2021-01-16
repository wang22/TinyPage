<template>
  <t-main-container title="General" note="Website Global Setting">
    <upload></upload>
    <email></email>
  </t-main-container>
</template>
<script>
import upload from './components/upload'
import email from './components/email'
export default {
  components: {
    upload,
    email
  }
}
</script>
