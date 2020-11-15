<template>
  <a href="#" :class="classes">
    <span class="mx-auto">
      <t-icon v-if="icon" :icon="icon" class="fill-current w-4 h-4 mr-2" />
      <slot></slot>
    </span>
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
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  method: {
  },
  computed: {
    classes() {
      const _this = this;
      const outlineTheme = function () {
        let size = 'py-2 px-5';
        switch(_this.size) {
          case 'lg': size = 'py-3 px-6'; break;
          case 'sm': size = 'py-1 px-4'; break;
        }
        // 
        return [
          `m-2 bg-white tracking-wide rounded border-2 shadow-md  inline-flex items-center ${size}`,
          {
            [`text-${_this.color}-800`]: _this.color,
            [`border-${_this.color}-600`]: _this.color,
            [`hover:border-${_this.color}-600`]: _this.color && !_this.disabled,
            [`hover:bg-${_this.color}-600`]: _this.color && !_this.disabled,
            ['hover:text-white']: !_this.disabled,
            ['cursor-pointer']: !_this.disabled,
            ['cursor-not-allowed opacity-50']: _this.disabled,
            ['w-full']: _this.block
          }
        ]
      }
      const style = this.outline ? outlineTheme() : '';
      console.log(style)
      return style;
    }
  }
};
</script>