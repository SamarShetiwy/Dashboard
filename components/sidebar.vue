<template lang="pug">
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
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>