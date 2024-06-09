<template lang="pug">
container.flex.bg-gray-300.w-full
            aside(class="md:w-[15rem] w-[10rem] h-screen md:px-10 px-5 py-2")
                Sidebar
            div(class="w-3/4").container
                header.flex.flex-col.justify-center.top-0
                    Navbar 
                content.h-screen.mt-10.rounded-xl.pt-10.shadow-xl
                    slot
footer.p-2.bg-gray-400  
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>