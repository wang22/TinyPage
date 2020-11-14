<template>
    <i :class="`icofont-${icon}`"></i>    
</template>
<script>
import '../assets/icofont.min.css';

export default {
    props: {
        icon: {
            type: String,
            default: 'check'
        }
    }
}
</script>