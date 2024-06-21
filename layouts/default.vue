<template lang="pug">
container(class="flex bg-[#312e81] w-full")
            aside(class="md:w-[15rem] w-[10rem] h-screen bg-[#312e81] md:px-10 px-5 py-2")
                Sidebar
            div(class="w-100 bg-[#c7d2fe]").container.my-5.rounded-lg.mr-7
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