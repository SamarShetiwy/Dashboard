<template lang="pug">
div.flex.items-center.justify-center.py-4.mb-5
    img.rounded-full.border-radius-50.h-20(src="/assets/images/2.jpg" alt="Logo")
NuxtScrollbar(tag="aside" @ps-scroll-y="onScroll")    
    NuxtLink(to="/")
        div.flex
            Icon(name="material-symbols:dashboard"  size="24px"  color="white").mr-3.mt-2
            h1.text-semibold.text-xl.text-white.mt-2 Dashboard
    ul
        li.py-5.text-2xl.text-semibold                      
            div.flex
                Icon(name="clarity:bullet-list-line" color="white").mr-3.mt-2
                span.text-white layout
                Icon(name="material-symbols:arrow-drop-down" color="white").mt-2.ml-3
        li.py-5.text-2xl.text-semibold 
            NuxtLink(to="/user/all-user")
                div.flex
                Icon(name="gravity-ui:persons" color="white").mr-3
                span.text-white Users 
        li.py-5.text-2xl.text-semibold  
            div.flex
                Icon(name="flowbite:annotation-solid" color="white").mt-1.mr-3
                span.text-white Reviews
        li.py-5.text-2xl.text-semibold  
            div.flex
                Icon(name="bxs:brightness" color="white").mt-1.mr-3
                span.text-white Setting 
</template>
    
    <script setup>
   
    </script>
    
    <style lang="scss" scoped>
    </style>