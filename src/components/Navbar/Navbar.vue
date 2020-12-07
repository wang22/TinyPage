<template>
    <div class="p-5">
        <div class="h-20 text-center">这里是logo</div>
        <div class="h-20 text-center">
            这里是用户
        </div>
        <t-input placeholder="Search" />
        <nav class="pt-5">
            <ul class="text-gray-600 font-light">
                <li class="uppercase text-lg text-gray-300"><label>manage</label></li>
                <li class="text-lg py-1">
                   <router-link class="p-2 rounded cursor-pointer block w-full hover:text-gray-800 hover:bg-gray-200" to="/posts"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Posts</router-link>
                </li>
                <li class="text-lg py-1">
                   <router-link class="p-2 rounded cursor-pointer block w-full hover:text-gray-800 hover:bg-gray-200" to="/channels"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Channels</router-link>
                </li>
                <li class="text-lg py-1">
                   <router-link class="p-2 rounded cursor-pointer block w-full hover:text-gray-800 hover:bg-gray-200" to="/tags"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Tags</router-link>
                </li>
                <li class="text-lg py-1">
                   <router-link class="p-2 rounded cursor-pointer block w-full hover:text-gray-800 hover:bg-gray-200" to="/pages"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Pages</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>