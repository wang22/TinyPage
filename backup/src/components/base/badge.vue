<template>
    <a href="#" :class="classes"><slot></slot></a>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            default: 'gray'
        }
    },
    computed: {
        classes() {
            return [
                `inline-block rounded text-${this.color}-600 bg-${this.color}-100 px-2 py-1 text-xs font-bold`
            ]
        }
    }
}
</script>
<style>

</style>