<template lang="pug">
container.flex.bg-gray-300.w-100.h-screen
            aside(class="md:w-[15rem] w-[10rem] h-screen md:px-10 px-5 py-2")
                Sidebar
            div(class="w-3/4").container
                header.flex.flex-col.justify-center.top-0
                    Navbar 
                content.h-screen.mt-10.rounded-xl.pt-10.shadow-xl
                    NuxtLayout
                    NuxtPage               
                    
    
</template>

<script setup>
    
    
    
</script>
    
    
    
    <style lang="scss" scoped>
    
    </style>