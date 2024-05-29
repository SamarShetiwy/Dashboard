<template lang="pug">
div(class="container")
    header
    NuxtPage   
    header.sticky.bg-red-100.flex.flex-col.justify-center.top-0.bg-yellow-600
        div.flex.justify-between.gap-4
            div.flex.items-center.gap-5
                img.circle.w-full.h-20(src="/assets/images/1.png" alt="Logo")
                NuxtLink(to="/")
                    h1.text-black.text-2xl Dashboard
            div.flex.items-center.gap-3
                icon.rounded(@click="toggleColorMode").bg-black.w-full.h-10
    div.flex.container.pt-5
        content(class="w-1/4 h-screen bg-blue-500 px-10 py-10")
            NuxtLink(to="/")
                h1.text-semibold.text-2xl.text-black Dashboard
            ul
                li.py-3 Providers
                NuxtLink(to="/user")
                    li.py-3 Clients
                li.py-3 Reviews
        div(class="w-3/4 bg-gray-200")
            div.content
</template>

<script setup >

// import { useColorMode } from '@nuxtjs/color-mode';
// const colorMode = useColorMode();
// const toggleColorMode = () => {
//   colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
// }
</script>

<style lang="scss" scoped>

</style>