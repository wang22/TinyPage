<template>
    <div class="pb-5 flex justify-between">
        <h1 class="text-2xl font-bold">{{title}}</h1>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import types from '../types'
export default {
    props: {
        title: types.String
    }
}
</script>