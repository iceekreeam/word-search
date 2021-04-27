<template>
    <ul v-for="word in words" :key="word">
        <li>{{word}}</li>
    </ul>
</template>

<script>
export default {
   props:['words'],
   data() {
        
    },
}
</script>