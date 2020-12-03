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
          <t-input placeholder="search" class="w-full shadow" />
          <ul class="mt-8 font-bold">
            <li>
              <a class="p-3 rounded-md block hover:bg-gray-300" href="hello"
                >Posts</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md block hover:bg-gray-300" href="hello"
                >Channels</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md block hover:bg-gray-300" href="hello"
                >Tags</a
              >
            </li>
            <li>
              <a class="p-3 rounded-md block hover:bg-gray-300" href="hello"
                >Pages</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full white"></div>
  </div>
</template>