<template lang="pug">    
div.flex.justify-between.gap-4.pt-10
    div.flex.items-center.gap-5.pt-2.ml-10
        NuxtLink(to="/")
            input(type="text" placeholder="Search" class="border-2 border-white rounded-full py-1 px-14")
    div.flex.items-center.gap-3
        icon(name="meteocons:clear-day-fill" size="30px")
        icon(name="mdi-light:account" size="30px" @click="toggleColorMode()" class="cursor-pointer")
</template>

<script setup>

const colorMode = useColorMode();
const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
    };


    
</script>

<style lang="scss" scoped>
Icon {
    size: '24px', 
}
    
</style>