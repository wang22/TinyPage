<template>
  <div class="t-browser">
    <div class="navigation d-flex align-items-center">
      <div class="icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      <div class="url rounded-pill flex-grow-1">
        {{url}}
      </div>
    </div>
    <div class="b-content d-flex justify-content-center align-items-center">
      <b-skeleton-table
        :rows="5"
        :columns="4"
        :table-props="{ bordered: true, striped: true }"
      ></b-skeleton-table>
    </div>
  </div>
</template>
<script>
import types from '../types'
export default {
  props: {
    url: types.String()
  }
}
</script>
<style lang="scss" scoped>
.t-browser {
  overflow: hidden;
  border: 2px solid #cad2db;
  border-radius: .3rem;
  box-shadow: 0 5px 3px rgba(0,0,0,.05);
  .navigation {
    padding: .5rem;
    height: 3rem;
    background: #f4f7fb;
    border-bottom: 2px solid #cad2db;
    .icons {
      margin-right: 1rem;
      color: #b0b4b9;
      svg {
        margin: 0 .2rem;
      }
    }
    .url {
      overflow-y: hidden;
      padding: .2rem .5rem;
      border: 2px solid #cad2db;
      background: #fff;
    }
  }
  .b-content {
    padding: 2rem;
    color: #b0b4b9;
  }
}
</style>
