<template>
  <i :class="`icon-${icon}`"></i>
</template>
<script>
import '../../assets/styles/simple-line-icons.css'

export default {
  props: {
    icon: {
      type: String,
    },
  },
};
</script>