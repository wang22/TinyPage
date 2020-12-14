<template>
  <div class="t-slidebar position-relative">
    <b-badge>{{selectName}}</b-badge>
    <div class="bar rounded-pill d-flex" @mouseout="hoverItem(currentItem)">
      <div v-for="(item) in itemData" :key="item.value" class="flex-fill" @mouseover="hoverItem(item)" @click="chooseItem(item)" :style="{opacity: item.opacity}">
        <div class="placeholder-show" :style="{background: color}" v-if="item.active">{{item.title}}</div>
        <div class="placeholder-hide" v-else>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.t-slidebar {
  text-align: center;
  .bar {
    background: rgba(0,0,0,.05);
    margin-top: .2rem;
    box-shadow: 0 5px 3px rgba(0,0,0,.05);
    overflow: hidden;
    height: 1rem;
    color: #fff;
    font-size: .1rem;
    .placeholder-show {
      color: #fff;
      width: 100%;
      height: 100%;
    }
    .placeholder-hide {
      color: var(--gray);
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<script>
import types from '../types'
export default {
  props: {
    items: types.Array(),
    color: types.String()
  },
  data () {
    return {
      selectName: 'private',
      itemData: [],
      currentItem: {}
    }
  },
  mounted () {
    this.itemData = JSON.parse(JSON.stringify(this.items))
    const step = (100 / this.items.length) / 100
    for (const key in this.itemData) {
      const opacity = step * (parseInt(key) + 1)
      this.itemData[key].active = false
      this.itemData[key].opacity = opacity
      this.itemData[key].index = parseInt(key)
    }
  },
  methods: {
    hoverItem (item) {
      for (const key in this.itemData) {
        const curr = this.itemData[key]
        curr.active = curr.index <= item.index
      }
      this.selectName = item.name
    },
    chooseItem (item) {
      this.currentItem = item
    }
  }
}
</script>
