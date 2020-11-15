<template>
  <a href="#" :class="classes">
    <t-icon v-if="icon" :icon="icon" class="fill-current w-4 h-4 mr-2" />
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue',
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      let size = 'px-3 py-1';
      switch(this.size) {
        case 'lg': size = 'px-4 py-2'; break;
        case 'sm': size = 'px-1 py-0'; break;
      }
      return [
        `shadow text-center ${size} inline-block hover:text-white rounded`,
        {
          [`text-${this.color}-100`]: this.color,
          [`bg-${this.color}-600`]: this.color,
          [`hover:bg-${this.color}-500`]: this.color && !this.disabled,
          ['cursor-pointer']: !this.disabled,
          ['cursor-not-allowed opacity-50']: this.disabled,
          ['w-full']: this.block
        }
      ]
    }
  }
};
</script>