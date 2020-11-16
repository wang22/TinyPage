<template>
  <div class="flex justify-between py-10">
    <nav class="text-gray-800 text-xl">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          <a href="#">Pages</a>
          <t-icon icon="rounded-right" class="fill-current mx-1" />
        </li>
        <li class="text-gray-600">
          <a href="#">Drafts</a>
        </li>
      </ol>
    </nav>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>