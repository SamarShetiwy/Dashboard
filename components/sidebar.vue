<template lang="pug">
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
</template>
    
    <script setup>
    // const menu = [
    //     {
    //         name: 'Providers',
    //         to: '/providers'
    //     },
    //     {
    //         name: 'Clients',
    //         to: '/clients'
    //     },
    //     {
    //         name: 'Reviews',
    //         to: '/reviews'
    //     },
    //     {
    //         name: 'Users',
    //         to: '/user',
    //         items: [
    //             { tittle: 'add', to: '/add'},
    //             { tittle: 'edit' , to: '/edit'},
    //             { tittle: 'delete' , to: '/delete'}
    //         ]
    //     }
    // ]
    </script>
    
    <style lang="scss" scoped>
    </style>
    