<template lang="pug">    
div(class="flex justify-between sm:gap-4 pt-10 gap-2")
    div.flex.items-center.gap-5.pt-2(class="")
        NuxtLink(to="/")
            input(type="text" placeholder="Search" class=" border-2 border-white rounded-full py-1 md:px-14 sm:px-3 px-2")
    div(class="flex items-center md:gap-3  mr-5")
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