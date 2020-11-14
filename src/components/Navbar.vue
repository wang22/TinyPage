<template>
  <aside class="p-4">
      <div class="h-20 text-center">
        logo
      </div>
      <div class="flex justify-star cursor-pointer p-2 rounded hover:shadow-inner hover:bg-gray-200">
          <img class="h-12 w-12 border-2 border-white rounded-full mr-3 shadow" src="../assets/avatar.jpg">
          <div class="text-left">
              <div class="text-base font-bold text-gray-800"><a href="#" class="h-6">Hello World</a></div>
              <div class="text-sm font-bold text-gray-600"><a href="#" class="h-6">@HelloWorld</a></div>
          </div>
          <div class="flex justify-center items-center ml-5">
              <icon icon="rounded-expand" class="text-2xl text-gray-500" />
          </div>
      </div>

      <div class="flex bg-gray-200 rounded-md overflow-hidden my-5 border-2 hover:shadow">
        <div class="flex-shrink text-gray-700 text-center bg-white p-2">
          <icon icon="search" class="text-gray-500" />
        </div>
        <input type="text" placeholder="Search" class="flex-shrink text-gray-700 bg-white p-2 w-5/7 focus:outline-none" />
      </div>
      <h5 class="text-gray-600 text-sm">MANAGE</h5>
      <ul class="mt-2">
        <li class="flex bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="list" class="mr-2 text-xl text-gray-600" />
          <span class="text-left">Posts</span>
          <span class="flex-auto text-right">
              <icon icon="rounded-right text-gray-400" />
          </span>
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="pencil-alt-1" class="ml-5 mr-2 text-xl text-gray-600" /> Drafts
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
           <icon icon="clock-time" class="ml-5 mr-2 text-xl text-gray-600" /> Scheduled
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
           <icon icon="tags" class="ml-5 mr-2 text-xl text-gray-600" /> Published
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="newspaper" class="mr-2 text-xl text-gray-600" /> Pages
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
           <icon icon="tags" class="mr-2 text-xl text-gray-600" /> Tags
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="laughing" class="mr-2 text-xl text-gray-600" /> Staff
        </li>
      </ul>
      <h5 class="text-gray-600 text-sm">SETTINGS</h5>
      <ul class="mt-2">
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="settings" class="mr-2 text-xl text-gray-600" />  General
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="pen-holder" class="mr-2 text-xl text-gray-600" />  Design
        </li>
        <li class="bg-transparent rounded-md p-2 cursor-pointer text-gray-800 mb-1 hover:bg-gray-200">
          <icon icon="code-alt" class="mr-2 text-xl text-gray-600" />  Code injection
        </li>
      </ul>
  </aside>
</template>
<script>
import icon from './icon'
export default {
    components: {
        icon
    }
}
</script>