<template>
  <div :class="classes">
    <div :class="headClass">
      <span class="text-lg">{{ title }}</span>
      <div>
          <slot name="options"></slot>
      </div>
    </div>
    <div class="p-3">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import types from "../types";
export default {
  props: {
    title: types.String(),
    border: types.Bool(false),
    headerBackground: types.Bool(true),
  },
  computed: {
    classes() {
      return [
        "bg-white shadow-block rounded overflow-hidden",
        {
          ["border"]: this.border,
        },
      ];
    },
    headClass() {
      return [
        `p-3 flex justify-between`,
        {
          ["bg-gray-50"]: this.headerBackground,
        },
      ];
    },
  },
};
</script>