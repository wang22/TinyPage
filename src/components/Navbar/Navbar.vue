<template>
    <div>
        <div class="p-5 text-center text-2xl inline-block w-full font-bold cursor-pointer">
            <span class="font-mono py-1 border-blue-100 hover:border-b-4 hover:border-blue-500 transition duration-500 ease-in">
                <span class="text-black">Tiny</span><span class="text-blue-500">CMS</span>
            </span>
        </div>
        <div class="mb-5 p-5 text-center bg-gray-50 text-center ">
            <img src="http://wx1.sinaimg.cn/mw600/aa979d74ly1glep4c5uy3j20fa0aldge.jpg" class="mr-auto ml-auto rounded-full border border-white shadow w-16 h-16 cursor-pointer transition duration-500 hover:opacity-70" />
            <div class="mr-auto ml-auto mt-2">
                <a href="#" class="py-1 mr-2 font-extralight hover:border-b-2 hover:border-blue-500 transition duration-150 ease-in">小王王</a>
                <a href="#" class="py-1 mr-2 font-extralight hover:border-b-2 hover:border-blue-500 transition duration-150 ease-in"><t-icon icon="user" /></a>
                <a href="#" class="py-1 mr-2 font-extralight hover:border-b-2 hover:border-blue-500 transition duration-150 ease-in"><t-icon icon="user" /></a>
            </div>
        </div>
        <nav class="p-5">
            <ul class="text-black">
                <li class="uppercase opacity-50"><label>manage</label></li>
                <li>
                   <router-link class="py-3 opacity-60 hover:opacity-100 transition duration-200 cursor-pointer block w-full hover:text-black" to="/posts"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Posts</router-link>
                </li>
                <li>
                   <router-link class="py-3 opacity-60 hover:opacity-100 transition duration-200 cursor-pointer block w-full hover:text-black" to="/channels"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Channels</router-link>
                </li>
                <li>
                   <router-link class="py-3 opacity-60 hover:opacity-100 transition duration-200 cursor-pointer block w-full hover:text-black" to="/tags"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Tags</router-link>
                </li>
                <li>
                   <router-link class="py-3 opacity-60 hover:opacity-100 transition duration-200 cursor-pointer block w-full hover:text-black" to="/pages"><t-icon class="mr-2 text-2xl" icon="newspaper" /> Pages</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>