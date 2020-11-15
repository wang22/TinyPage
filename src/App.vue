<template>
  <div>
    <div class="w-64 bg-white fixed inset-y-0 left-0 border-gray-400 shadow-md border-r-">
      <t-navbar />
    </div>
    <div class="ml-64 bg-gray-100 min-h-screen">
      <div class="xl:w-3/4 lg:w-full md:w-full sm:w-full mx-auto px-5 h-screen min-h-screen">
        this is center content
        <t-button outline>good</t-button>
        <t-button color="green" outline>good</t-button>
        <t-button color="gray">good</t-button>
        <t-button color="red">good</t-button>
        <t-button color="orange">good</t-button>
        <t-button color="green" icon="cart">good</t-button>
        <t-button color="green" icon="cart" disabled>good</t-button>
        <t-button color="green" size="sm" icon="cart">good</t-button>
        <t-button color="green" size="lg" icon="cart">你好</t-button>
        <t-button color="orange" block>good</t-button>
        <t-button color="orange"  icon="cart" block>good</t-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>