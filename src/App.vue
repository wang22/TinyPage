<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <t-input value="Hello world" name="my-input" variant="demo" />
    <t-button>Example button</t-button>
    <t-alert variant="error"> Something goes wrong </t-alert>
    <div class="flex">
      <label class="flex items-center">
        <t-radio name="options" value="a" />
        <span class="ml-2 text-sm">Option A</span>
      </label>
      <label class="flex items-center ml-2">
        <t-radio name="options" value="b" />
        <span class="ml-2 text-sm">Option B</span>
      </label>
    </div>
    <t-tag tag-name="h1" variant="h3">
      This is my title
      <t-tag tag-name="span" variant="badge">new</t-tag>
    </t-tag>
    <t-tag tag-name="p" variant="body">This is the body of my content</t-tag>
    <t-textarea value="Hello world" name="my-textarea" variant="demo" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
