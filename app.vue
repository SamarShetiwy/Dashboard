<template lang="pug">
container.flex.bg-yellow-700
        side(class="w- h-screen px-10 py-2")
            div.flex.items-center.justify-center.py-4
                img.rounded-full.border-radius-50.h-20(src="/assets/images/2.jpg" alt="Logo")
            NuxtScrollbar(tag="aside" @ps-scroll-y="onScroll")    
                NuxtLink(to="/")
                Icon(name="material-symbols:dashboard" color="black")
                h1.text-semibold.text-xl.text-black Dashboard
                ul
                li(v-for="item in menu" :key="item.name")
                    NuxtLink(:to="item.to")
                        li.py-3.text-2xl.text-semibold {{ item.name }}
                    ul(v-if="item.items")
                        li(v-for="subItem in item.items" :key="subItem.tittle" class="pl-4 py-1")
                            NuxtLink(:to="subItem.to") {{ subItem.tittle }}
        div(class="w-3/4")

        
            header.flex.flex-col.justify-center.top-0
                    div.flex.justify-between.gap-4.pt-10
                        div.flex.items-center.gap-5.pt-2.ml-10
                            NuxtLink(to="/")
                                input(type="text" placeholder="Search" class="border-2 border-white rounded-full py-1 px-14")
                        div.flex.items-center.gap-3
                            icon(name="meteocons:clear-day-fill")
                            icon(name="mdi-light:account")
            content.h-screen.mt-10.rounded-xl.pt-10.shadow-lg.bg-black
                NuxtPage               
                
    
</template>


<script setup lang="ts">

// import { useColorMode } from '@nuxtjs/color-mode';
// const colorMode = useColorMode();
// const toggleColorMode = () => {
//   colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
// }

const menu = [
        {
            name: 'Providers',
            to: '/providers',
            icon :'material-symbols:dashboard'
        },
        {
            name: 'User',
            to: '/user/all-user',
            icon :'emojione:busts-in-silhouette'
        },
        {
            name: 'Reviews',
            to: '/reviews',
            icon :'flowbite:annotation-solid'
        },
        {
            name: 'Setting',
            to: '/',
            icon :'bxs:brightness',
            items: [
                { tittle: 'add', to: '/add'},
                { tittle: 'edit' , to: '/edit'},
                { tittle: 'delete' , to: '/delete'}
            ]
        }
    ]

</script>



<style lang="scss" scoped>

</style>