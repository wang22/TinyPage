<template>
  <t-dropdata class="relative inline-block" ref="dropdata">
    <div
      class="relative rounded shadow-sm text-sm bg-white px-2 h-8 leading-8 cursor-pointer hover:border-gray-500 hover:shadow-md focus:outline-none"
    >
      {{defaultValue.name}}
      <t-icon icon="rounded-down" class="text-sm" />
    </div>
    <template v-slot:data>
      <div
        :class="`absolute ${direction}-0 mt-1 py-2 w-48 bg-white rounded-md shadow-xl z-20 text-sm`"
      >
        <a
          :class="`block cursor-pointer px-3 h-8 leading-8 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white ${item.active ? 'item-active': ''}`"
          v-for="item in list"
          :key="item.name"
          @click="chooseItem(item)"
        >
          {{ item.name }}
        </a>
      </div>
    </template>
  </t-dropdata>
</template>
<style>
.item-active {
    border-left: 2px solid rgba(99,179,237,255);
    background: rgba(235,248,255,255);
}
</style>
<script>
export default {
  props: {
    direction: {
      type: String,
      default: "right",
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      defaultValue: null,
    };
  },
  created() {
    for (let i in this.list) {
      const item = this.list[i];
      if (item.active) {
        this.defaultValue = item;
        break;
      }
    }
    this.list[0].active = true;
    this.defaultValue = this.list[0];
  },
  methods: {
    chooseItem(target) {
      for (let i in this.list) {
        const item = this.list[i];
        if (item !== target) {
            item.active = false;
        }
      }
      target.active = true;
      this.defaultValue = target;
      this.$refs.dropdata.handleClose();
    },
  },
};
</script>