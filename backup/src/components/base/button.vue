<template>
  <a href="#" :class="classes">
    <span :class="textClasses">
      <t-icon v-if="icon" :icon="icon" class="fill-current w-4 mr-2" />
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
    textClasses() {
      let size = 'leading-8';
      switch(this.size) {
        case 'lg': size = 'leading-9'; break;
        case 'sm': size = 'leading-7'; break;
      }
      return [
        'mx-auto text-sm',
        `${size}`
      ]
    },
    classes() {
      let size = 'px-2 h-8 inline-block';
      switch(this.size) {
        case 'lg': size = 'px-2 h-9 inline-block'; break;
        case 'sm': size = 'px-1 h-7 inline-block'; break;
      }

      const _this = this;
      const outlineTheme = function () {
        // 
        return [
          `bg-white tracking-wide rounded border-2 shadow-md items-center ${size}`,
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
      const defaultTheme = function() {
        return [`${size} border text-white rounded select-none active:outline-none active:shadow-outline`,
          {
            [`bg-${_this.color}-500`]: _this.color,
            [`border-${_this.color}-500`]: _this.color,
            [`hover:border-${_this.color}-600`]: _this.color && !_this.disabled,
            [`hover:bg-${_this.color}-600`]: _this.color && !_this.disabled,
            ['hover:text-white']: !_this.disabled,
            ['cursor-pointer']: !_this.disabled,
            ['cursor-not-allowed opacity-50']: _this.disabled,
            ['w-full block']: _this.block
          }
        ]
      }
      const style = this.outline ? outlineTheme() : defaultTheme();
      return style;
    }
  }
};
</script>