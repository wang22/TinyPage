<template>
  <div class="flex justify-start min-h-screen">
    <div class="w-2/12">
      <div class="bg-gray-100 min-h-screen border-r border-gray-200">
        <div class="py-3 text-center bg-gray-400">TinyCMS</div>
        <div class="mt-8 px-3 flex justify-between cursor-pointer">
          <div class="flex justify-between">
            <img
              src="http://tva4.sinaimg.cn/mw600/007kPYPngy1glazvw3gr8j30cm0c57hg.jpg"
              class="w-12 rounded-full mr-2"
            />
            <div class="font-bold">
              <h5>hello</h5>
              <h4 class="font-normal">@world</h4>
            </div>
          </div>
          <div class="self-center">&lt;&gt;</div>
        </div>
        <div class="px-3 mt-8">
          <t-input placeholder="search" class="w-full shadow-sm" />
          <label class="mt-8 block uppercase text-sm text-gray-500">manage</label>
          <ul class="mt-2">
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >
                Posts
              </a
              >
            </li>
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >Channels</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >Tags</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >Pages</a
              >
            </li>
          </ul>
          <label class="mt-4 block uppercase text-sm text-gray-500">settings</label>
          <ul class="mt-2">
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >General</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >Design</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md hover:bg-gray-300 flex justify-start" href="hello"
                >
                Code injection</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full white"></div>
  </div>
</template>