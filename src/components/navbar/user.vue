<template>
    <div class="cursor-pointer p-2 rounded hover:shadow-inner mt-5 hover:bg-gray-200">
        <div class="flex justify-star" @click="showInfo = !showInfo">
            <img class="h-12 w-12 border-2 border-white rounded-full mr-3 shadow" src="../../assets/avatar.jpg">
            <div class="text-left">
                <div class="text-base font-bold text-gray-800"><a href="#" class="h-6">Hello World</a></div>
                <div class="text-sm font-bold text-gray-600"><a href="#" class="h-6">@HelloWorld</a></div>
            </div>
            <div class="flex justify-center items-center ml-5">
                <t-icon icon="rounded-expand" class="text-2xl text-gray-500" />
            </div>
        </div>
        <div class="mt-5 border-t" v-if="showInfo">
            <!-- <button class="flex justify-between py-1 w-full p-2 mt-2 rounded hover:bg-gray-300 focus:outline-none">
                <div class="text-gray-700 text-sm">Dark Mode</div>
                <div class="text-gray-700 text-sm"><t-toggle /></div>
            </button> -->
            <button class="flex justify-between py-1 w-full p-2 mt-2 rounded hover:bg-gray-300 focus:outline-none">
                <div class="text-gray-700 text-sm">Your Profile</div>
                <div class="text-gray-700 text-sm"><t-icon icon="user-alt-5"/></div>
            </button>
            <button class="flex justify-between py-1 w-full p-2 mt-2 rounded hover:bg-gray-300 focus:outline-none">
                <div class="text-gray-700 text-sm">Sign Out</div>
                <div class="text-gray-700 text-sm"><t-icon icon="exit"/></div>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            showInfo: false
        }
    }
}
</script>