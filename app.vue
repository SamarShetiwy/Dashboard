<template lang="pug">
div(class="container")
div.flex
        div(class="w- h-screen bg-yellow-700 px-10 py-2")
            div.flex.items-center.justify-center.pb-4
                img.rounded_full.border-radius-50.h-20(src="/assets/images/2.jpg" alt="Logo")
            NuxtLink(to="/")
                h1.text-semibold.text-2xl.text-black Dashboard
            ul
                li(v-for="item in menu" :key="item.name")
                    NuxtLink(:to="item.to")
                        li.py-3 {{ item.name }}
                    ul(v-if="item.items")
                        li(v-for="subItem in item.items" :key="subItem.tittle" class="pl-4 py-1")
                            NuxtLink(:to="subItem.to") {{ subItem.tittle }}
        div(class="w-3/4")
            header.sticky.bg-red-100.flex.flex-col.justify-center.top-0.bg-yellow-700.p-4
                    div.flex.justify-between.gap-4
                        div.flex.items-center.gap-5
                            //- img.circle.w-full.h-20(src="/assets/images/1.png" alt="Logo")
                            NuxtLink(to="/")
                                h1.text-black.text-2xl Dashboard
                    div.flex.items-center.gap-3
            //- Form data for user    
            NuxtPage     
            //-    table All user     
          
</template>


<script setup>






// import { useColorMode } from '@nuxtjs/color-mode';
// const colorMode = useColorMode();
// const toggleColorMode = () => {
//   colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
// }

const menu = [
        {
            name: 'Providers',
            to: '/providers'
        },
        {
            name: 'User',
            to: '/user'
        },
        {
            name: 'Reviews',
            to: '/reviews'
        },
        {
            name: 'Users',
            to: '/user/all-user',
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