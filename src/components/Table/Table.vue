<template>
    <table class="bg-white shadow-table rounded overflow-hidden w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
            <tr class="text-gray-500 text-sm">
                <th v-for="(item, index) in column" :key="index" :width="item.width" class="p-3 font-normal text-left uppercase">{{item.title}}</th>
                <!-- <th class="p-3 font-normal text-left uppercase">name</th>
                <th class="p-3 font-normal text-left uppercase">name</th>
                <th class="p-3 font-normal text-left uppercase">name</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in data" :key="i" class="cursor-pointer hover:bg-gray-50 border-b">
                <td v-for="(col, index) in column" :key="index" class="p-3">
                    <slot v-if="col.slot" :name="col.slot" v-bind:item="item"></slot>
                    <span v-else>{{item[col.key]}}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import types from '../types'
export default {
    props: {
        column: types.Array,
        data: types.Array
    }
}
</script>