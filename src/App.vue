<template>
  <div id="app">
    <br>    
    <t-card
  header="Title of the card"
>
  Content of the card.
  
  <template v-slot:footer>
    <div class="flex justify-between">
      <t-button type="button">
        Cancel
      </t-button>
      <t-button type="button">
        Ok
      </t-button>
    </div>
  </template>
</t-card>
    <div id="nav">
      <t-alert variant="danger" show>
  Something goes wrong
</t-alert>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
    </div>
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
    <router-view/>
    <t-button>Example button</t-button>
    <t-button>Example button</t-button>
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
