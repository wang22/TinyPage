<template>
  <button :class="`${theme} ${addTheme}`"><slot></slot></button>
</template>
<script>
const baseTheme = 'focus:outline-none focus:shadow-outline font-bold py-1 px-2 rounded'
const theme = {
  default: `${baseTheme} bg-white hover:bg-gray-200 text-black `,
  success: `${baseTheme} bg-green-500 hover:bg-green-600 text-white`,
  error: `${baseTheme} bg-red-500 hover:bg-red-600 text-white`
}
export default {
  props: {
    variant: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "default",
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      theme: '',
      addTheme: ''
    }
  },
  created() {
    if (this.block) {
      this.addTheme = ' w-full';
    }
    this.theme = theme[this.variant];
  }
};
</script>