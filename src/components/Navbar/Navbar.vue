<template>
    <div class="p-5">
        <div class="text-center text-2xl inline-block w-full font-bold cursor-pointer">
            <span class="font-mono py-1 border-blue-100 hover:border-b-4 hover:border-blue-500 transition duration-500 ease-in">
                <span class="text-black">Tiny</span><span class="text-blue-500">CMS</span>
            </span>
        </div>
        <div class="p-10 text-center">
            这里是用户
        </div>
        <t-input placeholder="Search" />
        <nav class="pt-5">
            <ul class="text-gray-400 font-light">
                <li class="uppercase text-gray-300"><label>manage</label></li>
                <li class="">
                   <router-link class="py-3 cursor-pointer block w-full hover:text-black" to="/posts"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Posts</router-link>
                </li>
                <li class="">
                   <router-link class="py-3 cursor-pointer block w-full hover:text-black" to="/channels"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Channels</router-link>
                </li>
                <li class="">
                   <router-link class="py-3 cursor-pointer block w-full hover:text-black" to="/tags"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Tags</router-link>
                </li>
                <li class="">
                   <router-link class="py-3 cursor-pointer block w-full hover:text-black" to="/pages"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Pages</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>