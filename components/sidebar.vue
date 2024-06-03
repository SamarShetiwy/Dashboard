<template lang="pug">
div.flex.items-center.justify-center.py-4.mb-5
    img.rounded-full.border-radius-50.h-20(src="/assets/images/2.jpg" alt="Logo")
NuxtScrollbar(tag="aside" @ps-scroll-y="onScroll")    
    NuxtLink(to="/")
        div.flex
            Icon(name="material-symbols:dashboard" color="black").mr-3.mt-2
            h1.text-semibold.text-xl.text-black.mt-2 Dashboard
    ul
        li.py-5.text-2xl.text-semibold                      
            div.flex
                Icon(name="clarity:bullet-list-line" color="black").mr-3.mt-2
                span layout
                Icon(name="material-symbols:arrow-drop-down" color="black").mt-2.ml-3
        li.py-5.text-2xl.text-semibold 
            NuxtLink(to="/user/all-user")
                div.flex
                Icon(name="gravity-ui:persons" color="black").mr-3
                span Users 
        li.py-5.text-2xl.text-semibold  
            div.flex
                Icon(name="flowbite:annotation-solid" color="black").mt-1.mr-3
                span Reviews
        li.py-5.text-2xl.text-semibold  
            div.flex
                Icon(name="bxs:brightness" color="black").mt-1.mr-3
                span Setting 
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