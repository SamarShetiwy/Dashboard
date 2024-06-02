<template lang="pug">
div.container.mx-auto.p-4.pt-8.ml-7.shadow-lg.mt-7.border
    form
        div.mb-4
            label(for="FirstName").text-gray-700.block Firs tName
            input(id="firstName" type="text" class="mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="Last Name").text-gray-700.block Last Name
            input(id="Last Name" type="text" class="mt-1 block w-full p-1 rounded-full") 
        div.mb-4
            label(for=" Birth Date").text-gray-700.block Birth Date
            input(id=" Birth Date" type="text" class="mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="Nationality ID").text-gray-700.block Nationality ID
            input(id="Nationality ID" type="text" class="mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="FirstName").text-gray-700.block Gender
            select(id="Gender" class="mt-1 block w-full p-1 rounded-full")
                option(value="Male") Male
                option(value="Female") Female
                option(value="PHONE") Phone
        div.mb-4
            label(for="preferedContactMethod").text-gray-700.block ContactMethod
            select(id="preferedContactMethod" class="mt-1 block w-full p-1 rounded-full")
                option(value="EMAIL") Email
                option(value="Female") Female
        

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>