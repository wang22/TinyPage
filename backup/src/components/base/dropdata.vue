<template>
  <div v-clickoutside="handleClose">
    <div @click="showData">
      <slot></slot>
    </div>
    <slot name="data" v-if="show"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showData() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    },
  },
};
</script>