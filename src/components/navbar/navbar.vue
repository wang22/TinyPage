<template>
  <aside class="p-4">
      <div class="h-20 text-center text-4xl">
        TinyCMS
      </div>
      
      <t-user />

      <div class="flex bg-gray-200 rounded-md overflow-hidden my-5 border-2 hover:shadow">
        <div class="flex-shrink text-gray-700 text-center bg-white p-2">
          <t-icon icon="search" class="text-gray-500" />
        </div>
        <input type="text" placeholder="Search" class="flex-shrink text-gray-700 bg-white p-2 w-5/7 focus:outline-none" />
      </div>
      <h5 :class="cls.subTitle">MANAGE</h5>
      <ul class="mt-2">
        <li :class="cls.navTitle">
          <t-icon icon="list" class="mr-2 text-xl text-gray-600" />
          <span class="text-left">Posts</span>
          <span class="flex-auto text-right ">
            <t-icon icon="rounded-right text-gray-400 inline-block transform rotate-0" />
          </span>
        </li>
        <div v-show="true">
          <li :class="cls.navTitle">
            <t-icon icon="pencil-alt-1" class="ml-5 mr-2 text-xl text-gray-600" /> Drafts
          </li>
          <li :class="cls.navTitle">
            <t-icon icon="clock-time" class="ml-5 mr-2 text-xl text-gray-600" /> Scheduled
          </li>
          <li :class="cls.navTitle">
            <t-icon icon="paper" class="ml-5 mr-2 text-xl text-gray-600" /> Published
          </li>
        </div>
        <li :class="cls.navTitle">
          <t-icon icon="newspaper" class="mr-2 text-xl text-gray-600" /> Pages
        </li>
        <li :class="cls.navTitle">
           <t-icon icon="tags" class="mr-2 text-xl text-gray-600" /> Tags
        </li>
        <li :class="cls.navTitle">
          <t-icon icon="laughing" class="mr-2 text-xl text-gray-600" /> Staff
        </li>
      </ul>
      <h5 :class="cls.subTitle">SETTINGS</h5>
      <ul class="mt-2">
        <li :class="cls.navTitle">
          <t-icon icon="settings" class="mr-2 text-xl text-gray-600" />  General
        </li>
        <li :class="cls.navTitle">
          <t-icon icon="pen-holder" class="mr-2 text-xl text-gray-600" />  Design
        </li>
        <li :class="cls.navTitle">
          <t-icon icon="code-alt" class="mr-2 text-xl text-gray-600" />  Code injection
        </li>
      </ul>
  </aside>
</template>
<script>
import TUser from './user';
export default {
    components: {
      TUser
    },
    data() {
      return {
        cls: {
          subTitle: 'text-gray-500 text-sm',
          navTitle: 'flex bg-transparent rounded-md p-2 cursor-pointer text-gray-900 mb-1 hover:bg-gray-200 text-sm'
        }
      }
    }
}
</script>